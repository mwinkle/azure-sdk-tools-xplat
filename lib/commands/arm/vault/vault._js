/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var __ = require('underscore');
var util = require('util');

var adUtils = require('../ad/adUtils');
var groupUtils = require('../group/groupUtils');
var profile = require('../../../util/profile');
var resourceUtils = require('../resource/resourceUtils');
var utils = require('../../../util/utils');
var kvUtils = require('./kv-utils');

var $ = utils.getLocaleString;

var API_VERSION = '2014-12-19-preview';
var RESOURCE_TYPE = 'Microsoft.KeyVault/vaults';
var SKU_TYPE = ['Standard', 'Premium'];
var KEY_PERMS = ['all','create','import','update','delete','get','list','backup','restore','sign','verify','encrypt','decrypt','wrapKey','unwrapKey'];
var SECRET_PERMS = ['all','set','get','list','delete'];

exports.init = function(cli) {

    var log = cli.output;
    var withProgress = cli.interaction.withProgress.bind(cli.interaction);
    var graphClient;

    var vault = cli.category('vault')
        .description($('Commands to manage vaults'));

    vault.command('list [resource-group]')
        .description($('Lists existing vaults'))
        .usage('[[--resource-group] <resource-group>] [options]')
        .option('-g, --resource-group <resource-group>', $('the resource group name'))
        // // Filter by tag is disabled due to a possible bug on the resources module.
        //.option('-t, --tags <tags>', $('Tag to use to filter to the resource group. Can only take 1 tag. ' +
        //    'In the format of "name=value". Name is required and value is optional. ' +
        //    'For example, -t tag1 or -t tag1=value1.'))
        .option('-s, --subscription <subscription>', $('the subscription identifier'))
        .execute(function(resourceGroup, options, _) {
          
            ///////////////////////
            // Parse arguments.  //
            ///////////////////////

            log.verbose('arguments: ' + JSON.stringify({resourceGroup:resourceGroup,options:options}));

            options.resourceGroup = options.resourceGroup || resourceGroup;

            var parameters = {
                resourceType: RESOURCE_TYPE
            };

            if (options.resourceGroup) {
                parameters.resourceGroupName = options.resourceGroup;
            }
            
            if (options.tags) {
                // tagUtils.populateQueryFilterWithTagInfo(options.tags, parameters);
                throw new Error('Not implemented');
            }

            ////////////////////////////////////////////
            // Create the client and list vaults.     //
            ////////////////////////////////////////////

            var subscription = profile.current.getSubscription(options.subscription);
            var client = utils.createResourceClient(subscription);

            var resources;
            var progress = cli.interaction.progress($('Listing vaults'));
            try {
                resources = client.resources.list(parameters, _).resources;
                for (var i = 0; i < resources.length; ++i) {
                    resources[i].resourceGroup = resourceUtils.getResourceInformation(resources[i].id).resourceGroup;
                }
            } finally {
                progress.end();
            }

            ///////////////////////
            // Show results.     //
            ///////////////////////

            if (resources.length === 0) {
                log.info($('No vaults found.'));
            } else {
                log.table(resources, function(row, item) {
                    row.cell($('Name'), item.name);
                    row.cell($('Resource Group'), item.resourceGroup);
                    row.cell($('Location'), item.location);
                    row.cell($('Tags'), kvUtils.getTagsInfo(item.tags));
                });
            }
        });

    vault.command('create [vault-name]')
        .description($('Creates a vault'))
        .usage('[--vault-name] <vault-name> --resource-group <resource-group> --location <location> [options]')
        .option('-u, --vault-name <vault-name>', $('the vault name; this is used to compute the vault\'s DNS name'))
        .option('-g, --resource-group <resource-group>', $('the resource group name'))
        .option('-l, --location <location>', $('Azure region in which to create the vault'))
        .option('-x, --sku <sku>', util.format($('SKU setting, one of: [%s]'), SKU_TYPE.join(', ')))
        .option('-t, --tags <tags>', $('Tags to set on the vault. Can be multiple in the format \'name=value\'. Name is required and value is optional. For example, -t tag1=value1;tag2'))
        .option('-s, --subscription <subscription>', $('the subscription identifier'))
        .execute(function(vaultName, options, _) {

            ///////////////////////
            // Parse arguments.  //
            ///////////////////////
            
            log.verbose('arguments: ' + JSON.stringify({vaultName:vaultName,options:options}));
            
            options.vaultName = options.vaultName || vaultName;
        
            if (!options.vaultName) {
                return cli.missingArgument('vault-name');
            } else if (!options.resourceGroup) {
                return cli.missingArgument('resource-group');
            } else if (!options.location) {
                return cli.missingArgument('location');
            }

            options.sku = kvUtils.parseEnumArgument('sku', options.sku, SKU_TYPE, SKU_TYPE[0]);
            options.tags = kvUtils.parseTagsArgument('tags', options.tags);
            
            /////////////////////////
            // Create the client.  //
            /////////////////////////

            var subscription = profile.current.getSubscription(options.subscription);
            var client = utils.createResourceClient(subscription);

            ///////////////////////////////////
            // Load existing vault, if any.  //
            ///////////////////////////////////
            
            var identity = createVaultIdentity(options.vaultName);

            var vaultResource = withProgress($('Checking pre-condition'),
                function(log, _) {
                    var resourceGroup = getVaultResourceGroup(client, options.vaultName, _);
                    if (!resourceGroup) {
                        return null;
                    }
                    return groupUtils.getResource(client, resourceGroup, identity, _);
                }, _);

            if (vaultResource) {
                throw new Error(util.format($('Vault %s already exists'), vaultResource.name || options.vaultName));
            }

            //////////////////////////////////
            // Build and send the request.  //
            //////////////////////////////////
            
            var objectId = getObjectId(subscription, null, null, _);

            var properties = {
                sku: {
                    family: 'A',
                    name: options.sku
                },
                tenantId: subscription.tenantId,
                accessPolicies: [{
                    // Default policy for the creator.
                    tenantId: subscription.tenantId,
                    objectId: objectId,
                    permissions: {
                        keys: ['all'],
                        secrets: ['all']
                    }
                }]
            };

            var request = {
                location: options.location,
                resource: {},
                properties: properties,
                resourceProviderApiVersion: API_VERSION,
                tags: options.tags
            };

            log.verbose('request: ' + JSON.stringify(request));

            vaultResource = withProgress(util.format($('Creating vault %s'), options.vaultName),
                function(log, _) {
                    return client.resources.createOrUpdate(options.resourceGroup, identity, request, _).resource;
                }, _);

            log.info(util.format($('Created vault %s'), vaultResource.name || options.vaultName));
            showVault(vaultResource);
            
            if (utils.ignoreCaseEquals(properties.sku.name, 'standard')) {
              log.warn('This vault does not support HSM-protected keys. Please refer to http://go.microsoft.com/fwlink/?linkid=512521 for the vault service tiers.');
              log.warn('When creating a vault, specify the --sku parameter to select a service tier that supports HSM-protected keys.');
            }
            
        });

    vault.command('set-attributes [vault-name]')
        .description($('Changes attributes of an existing vault'))
        .usage('[--vault-name] <vault-name> [options]')
        .option('-u, --vault-name <vault-name>', $('the vault name'))
        .option('-x, --sku <sku>', util.format($('SKU setting, one of: [%s]'), SKU_TYPE.join(', ')))
        .option('-t, --tags <tags>', $('Tags to set on the vault. Can be multiple in the format \'name=value\'. Name is required and value is optional. For example, -t tag1=value1;tag2'))
        .option('--reset-tags', $('remove previously existing tags; can combined with --tags'))
        .option('-s, --subscription <subscription>', $('the subscription identifier'))
        .execute(function(vaultName, options, _) {

            //////////////////////////////////////////////////////////////////////////
            // Parse some arguments (others are parsed after the vault is loaded).  //
            //////////////////////////////////////////////////////////////////////////
            
            log.verbose('arguments: ' + JSON.stringify({vaultName:vaultName,options:options}));
            
            options.vaultName = options.vaultName || vaultName;
        
            if (!options.vaultName) {
                return cli.missingArgument('vault-name');
            }

            /////////////////////////
            // Create the client.  //
            /////////////////////////

            var subscription = profile.current.getSubscription(options.subscription);
            var client = utils.createResourceClient(subscription);

            ///////////////////////////
            // Load existing vault.  //
            ///////////////////////////
            
            var identity = createVaultIdentity(options.vaultName);

            var resourceGroup;
            var vaultResource = withProgress(util.format($('Loading vault %s'), options.vaultName),
                function(log, _) {
                    resourceGroup = getVaultResourceGroup(client, options.vaultName, _);
                    if (!resourceGroup) {
                        return null;
                    }
                    return groupUtils.getResource(client, resourceGroup, identity, _);
                }, _);

            if (!vaultResource) {
                throw new Error(util.format($('Vault not found: %s'), options.vaultName));
            }
            
            options.vaultName = vaultResource.name || options.vaultName;
            
            var properties = vaultResource.properties;
            
            /////////////////////////////////////////////////////////////
            // Update options with current values or argument values.  //
            /////////////////////////////////////////////////////////////

            options.sku = kvUtils.parseEnumArgument('sku', options.sku, SKU_TYPE, properties.sku.name);

            options.tags = kvUtils.parseTagsArgument('tags', options.tags);
            if (options.tags) {
              if (!options.resetTags) {
                options.tags = kvUtils.mergeTags(vaultResource.tags, options.tags);
              }
            } else if (options.resetTags) {
              options.tags = {};
            }

            //////////////////////////////////
            // Build and send the request.  //
            //////////////////////////////////
            
            properties.sku.name = options.sku;
            
            var request = {
                location: vaultResource.location,
                resource: {},
                properties: vaultResource.properties,
                resourceProviderApiVersion: API_VERSION,
                tags: options.tags
            };

            log.verbose('request: ' + JSON.stringify(request));

            vaultResource = withProgress(util.format($('Updating vault %s'), options.vaultName),
                function(log, _) {
                    return client.resources.createOrUpdate(resourceGroup, identity, request, _).resource;
                }, _);

            log.info(util.format($('Vault %s was updated'), vaultName));
            showVault(vaultResource);
        });

    vault.command('show [vault-name]')
        .description($('Shows properties of a vault'))
        .usage('[--vault-name] <vault-name> [options]')
        .option('-u, --vault-name <vault-name>', $('the vault name'))
        .option('-g, --resource-group <resource-group>', $('the resource group name'))
        .option('-s, --subscription <subscription>', $('the subscription identifier'))
        .execute(function(vaultName, options, _) {

            ///////////////////////
            // Parse arguments.  //
            ///////////////////////

            log.verbose('arguments: ' + JSON.stringify({vaultName:vaultName,options:options}));
            
            options.vaultName = options.vaultName || vaultName;
        
            if (!options.vaultName) {
                return cli.missingArgument('vault-name');
            }

            /////////////////////////
            // Create the client.  //
            /////////////////////////

            var subscription = profile.current.getSubscription(options.subscription);
            var client = utils.createResourceClient(subscription);

            ///////////////////////////
            // Load existing vault.  //
            ///////////////////////////

            var identity = createVaultIdentity(options.vaultName);

            var resourceGroup;
            var vaultResource = withProgress(util.format($('Loading vault %s'), options.vaultName),
                function(log, _) {
                    resourceGroup = options.resourceGroup || getVaultResourceGroup(client, options.vaultName, _);
                    if (!resourceGroup) {
                        return null;
                    }
                    return groupUtils.getResource(client, resourceGroup, identity, _);
                }, _);

            if (!vaultResource) {
                var msg = options.resourceGroup
                    ?   util.format($('Vault not found on resource group %s: %s'), options.resourceGroup, options.vaultName)
                    :   util.format($('Vault not found: %s'), options.vaultName);
                throw new Error(msg);
            }

            showVault(vaultResource);
        });

    vault.command('delete [vault-name]')
        .description($('Deletes an existing vault'))
        .usage('[--vault-name] <vault-name> [options]')
        .option('-u, --vault-name <vault-name>', $('the vault name'))
        .option('-q, --quiet', $('quiet mode (do not ask for delete confirmation)'))
        .option('-p, --pass-thru', $('outputs the deleted vault'))
        .option('-s, --subscription <subscription>', $('the subscription identifier'))
        .execute(function(vaultName, options, _) {

            ///////////////////////
            // Parse arguments.  //
            ///////////////////////

            log.verbose('arguments: ' + JSON.stringify({vaultName:vaultName,options:options}));
            
            options.vaultName = options.vaultName || vaultName;
        
            if (!options.vaultName) {
                return cli.missingArgument('vault-name');
            }

            if (!options.quiet && !cli.interaction.confirm(util.format($('Delete vault %s? [y/n] '), options.vaultName), _)) {
                throw new Error($('Aborted by user'));
            }

            /////////////////////////
            // Create the client.  //
            /////////////////////////

            var subscription = profile.current.getSubscription(options.subscription);
            var client = utils.createResourceClient(subscription);

            ////////////////////////////////////////////
            // Load resource group and delete vault.  //
            ////////////////////////////////////////////

            var identity = createVaultIdentity(options.vaultName);

            var progress = cli.interaction.progress(util.format($('Deleting vault %s'), options.vaultName));
            try {
                var resourceGroup = getVaultResourceGroup(client, options.vaultName, _);
                if (!resourceGroup) {
                    throw new Error(util.format($('Vault not found: %s'), options.vaultName));
                }
                client.resources.deleteMethod(resourceGroup, identity, _);;
            } finally {
                progress.end();
            }

        });

    vault.command('set-policy [vault-name]')
        .description($('Adds or modifies an access policy for a vault'))
        .usage('[--vault-name] <vault-name> [options]')
        .option('-u, --vault-name <vault-name>', $('the vault name'))
        .option('--object-id <object-id>', $('a GUID that identifies the principal that will receive permissions'))
        .option('--spn <service-principal-name>', $('name of a service principal that will receive permissions'))
        .option('--upn <user-principal-name>', $('name of a user principal that will receive permissions'))
        .option('--perms-to-keys <perms-to-keys>', util.format($('JSON-encoded array of strings representing key operations; each string can be one of [%s]'), KEY_PERMS.join(', ')))
        .option('--perms-to-secrets <perms-to-secrets>', util.format($('JSON-encoded array of strings representing secret operations; each string can be one of [%s]'), SECRET_PERMS.join(', ')))
        .option('--enabled-for-deployment <boolean>', $('reserved for future use'))
        .option('-s, --subscription <subscription>', $('the subscription identifier'))
        .execute(function(vaultName, options, _) {

            ///////////////////////
            // Parse arguments.  //
            ///////////////////////

            log.verbose('arguments: ' + JSON.stringify({vaultName:vaultName,options:options}));
            
            options.vaultName = options.vaultName || vaultName;
        
            if (!options.vaultName) {
                return cli.missingArgument('vault-name');
            }

            options.permsToKeys = kvUtils.parseArrayArgument('perms-to-keys', options.permsToKeys, KEY_PERMS, null);
            options.permsToSecrets = kvUtils.parseArrayArgument('perms-to-secrets', options.permsToSecrets, SECRET_PERMS, null);
            options.enabledForDeployment = kvUtils.parseBooleanArgument('enabled-for-deployment', options.enabledForDeployment);

            if (!options.permsToKeys && !options.permsToSecrets && __.isUndefined(options.enabledForDeployment)) {
                log.error($('Please inform at least one of the following:'));
                log.error($('    --perms-to-keys <perms-to-keys>'));
                log.error($('    --perms-to-secrets <perms-to-secrets>'));                
                log.error($('    --enabled-for-deployment <boolean>'));
                throw new Error($('Inconsistent arguments'));
            }

            if (options.permsToKeys || options.permsToSecrets) {
                
                var v = 0;
                if (options.objectId) v++;
                if (options.spn) v++;
                if (options.upn) v++;
                
                if (v != 1) {
                    v = [$('zero'), $('one'), $('two'), $('three')][v];
                    log.error(util.format($('Expecting exactly one of the following, but %s were informed:'), v));
                    log.error($('    --object-id <object-id>'));
                    log.error($('    --spn <service-principal-name>'));
                    log.error($('    --upn <user-principal-name>'));
                    throw new Error($('Could not establish principal from command arguments'));
                }

                if (!options.objectId) {
                    options.objectId = getObjectId(subscription, options.spn, options.upn, _);
                }

            } else {
              
                var extraneous;
                if (options.objectId) extraneous = '--object-id';
                if (options.spn) extraneous = '--spn';
                if (options.upn) extraneous = '--upn';

                if (extraneous) {
                    throw new Error(util.format($('Inconsistent arguments: %s was informed while none of [--perms-to-keys, --perms-to-secrets] was informed'), extraneous));
                }

            }

            /////////////////////////
            // Create the client.  //
            /////////////////////////

            var subscription = profile.current.getSubscription(options.subscription);
            var client = utils.createResourceClient(subscription);

            ///////////////////////////
            // Load existing vault.  //
            ///////////////////////////

            var identity = createVaultIdentity(options.vaultName);

            var resourceGroup;
            var vaultResource = withProgress(util.format($('Loading vault %s'), options.vaultName),
                function(log, _) {
                    resourceGroup = getVaultResourceGroup(client, options.vaultName, _);
                    if (!resourceGroup) {
                        return null;
                    }
                    return groupUtils.getResource(client, resourceGroup, identity, _);
                }, _);

            if (!vaultResource) {
                throw new Error(util.format($('Vault not found: %s'), options.vaultName));
            }

            var properties = vaultResource.properties;

            if (options.permsToKeys || options.permsToSecrets) {

                /////////////////////////////////////////////////////////////
                // Finds the policy to change, or add if not found.        //
                /////////////////////////////////////////////////////////////

                var policies = properties.accessPolicies;
                var policy = __.find(policies, function(item) {
                    return utils.ignoreCaseEquals(item.tenantId, properties.tenantId) && utils.ignoreCaseEquals(item.objectId, options.objectId);
                });

                if (!policy) {
                    // Adds an empty policy. It will be populated later.
                    policy = {
                      tenantId: properties.tenantId,
                      objectId: options.objectId,
                      permissions: {
                          keys: [],
                          secrets: []
                      }
                    };
                    policies.push(policy);
                }
                
                //////////////////////////////////////////////////
                // Changes only what has been requested.        //
                //////////////////////////////////////////////////

                if (options.permsToKeys) {
                  policy.permissions.keys = options.permsToKeys;
                }

                if (options.permsToSecrets) {
                  policy.permissions.secrets = options.permsToSecrets;
                }
                
                // If both are empty, the policy entry is not required.
                if (!policy.permissions.keys.length && !policy.permissions.secrets.length) {
                    var index = policies.indexOf(policy);
                    policies.splice(index, 1);
                }
            }
            
            if (!__.isUndefined(options.enabledForDeployment)) {
                properties.enabledForDeployment = options.enabledForDeployment;
            }

            //////////////////////////////////
            // Build and send the request.  //
            //////////////////////////////////

            var request = {
                location: vaultResource.location,
                resource: {},
                properties: properties,
                resourceProviderApiVersion: API_VERSION,
                tags: vaultResource.tags
            };

            log.verbose('request: ' + JSON.stringify(request));

            vaultResource = withProgress(util.format($('Updating vault %s'), options.vaultName),
                function(log, _) {
                    return client.resources.createOrUpdate(resourceGroup, identity, request, _).resource;
                }, _);

            log.info(util.format($('Vault %s was updated'), options.vaultName));
            showVault(vaultResource);

        });

    vault.command('delete-policy [vault-name]')
        .description($('Removes an access policy from a vault'))
        .usage('[--vault-name] <vault-name> [options]')
        .option('-u, --vault-name <vault-name>', $('the vault name'))
        .option('--object-id <object-id>', $('a GUID that identifies the principal that will lose permissions'))
        .option('--spn <service-principal-name>', $('name of a service principal that will lose permissions'))
        .option('--upn <user-principal-name>', $('name of a user principal that will lose permissions'))
        .option('-s, --subscription <subscription>', $('the subscription identifier'))
        .execute(function(vaultName, options, _) {

            ///////////////////////
            // Parse arguments.  //
            ///////////////////////

            log.verbose('arguments: ' + JSON.stringify({vaultName:vaultName,options:options}));
            
            options.vaultName = options.vaultName || vaultName;
        
            if (!options.vaultName) {
                return cli.missingArgument('vault-name');
            }
            
            var v = 0;
            if (options.objectId) v++;
            if (options.spn) v++;
            if (options.upn) v++;
            
            if (v != 1) {
                v = ['zero', 'one', 'two', 'three'][v];
                log.error(util.format($('Expecting exactly one of the following, but %s were informed:'), v));
                log.error($('    --object-id <object-id>'));
                log.error($('    --spn <service-principal-name>'));
                log.error($('    --upn <user-principal-name>'));
                throw new Error($('Could not establish principal from command arguments'));
            }

            if (!options.objectId) {
                options.objectId = getObjectId(subscription, options.spn, options.upn, _);
            }

            /////////////////////////
            // Create the client.  //
            /////////////////////////

            var subscription = profile.current.getSubscription(options.subscription);
            var client = utils.createResourceClient(subscription);

            ///////////////////////////
            // Load existing vault.  //
            ///////////////////////////

            var identity = createVaultIdentity(options.vaultName);

            var resourceGroup;
            var vaultResource = withProgress(util.format($('Loading vault %s'), options.vaultName),
                function(log, _) {
                    resourceGroup = getVaultResourceGroup(client, options.vaultName, _);
                    if (!resourceGroup) {
                        return null;
                    }
                    return groupUtils.getResource(client, resourceGroup, identity, _);
                }, _);

            if (!vaultResource) {
                throw new Error(util.format($('Vault not found: %s'), options.vaultName));
            }

            //////////////////////////////////////////////////////////////////////
            // Remove previous permissions for same user, if they exist.        //
            //////////////////////////////////////////////////////////////////////

            var properties = vaultResource.properties;
            var policies = properties.accessPolicies;
            var previousLength = policies.length;
            var policies = __.filter(properties.accessPolicies, function(item) {
                return !utils.ignoreCaseEquals(item.tenantId, properties.tenantId) || !utils.ignoreCaseEquals(item.objectId, options.objectId);
            });

            if (policies.length == previousLength) {
                log.info($('No policy found for specified principal, nothing to do.'));
                return;
            }

            properties.accessPolicies = policies;

            //////////////////////////////////
            // Build and send the request.  //
            //////////////////////////////////

            var request = {
                location: vaultResource.location,
                resource: {},
                properties: properties,
                resourceProviderApiVersion: API_VERSION,
                tags: vaultResource.tags
            };

            log.verbose('request: ' + JSON.stringify(request));

            vaultResource = withProgress(util.format($('Updating vault %s'), options.vaultName),
                function(log, _) {
                    return client.resources.createOrUpdate(resourceGroup, identity, request, _).resource;
                }, _);

            log.info(util.format($('Vault %s was updated'), options.vaultName));
            showVault(vaultResource);

        });

    function getVaultResourceGroup(client, vaultName, _) {
        log.verbose(util.format($('Loading resource group of vault %s'), vaultName));
        var parameters = {
            resourceType: RESOURCE_TYPE
        };
        var resources = client.resources.list(parameters, _).resources;
        for (var i = 0; i < resources.length; i++) {
            var resourceInformation = resourceUtils.getResourceInformation(resources[i].id);
            var name = resourceInformation.resourceName || item.name;
            if (name.toLowerCase() == vaultName.toLowerCase()) {
                return resourceInformation.resourceGroup;
            }
        }
        return null;
    }

    function createVaultIdentity(vaultName) {
        return {
            resourceName: vaultName,
            resourceProviderNamespace: resourceUtils.getProviderName(RESOURCE_TYPE),
            resourceProviderApiVersion: API_VERSION,
            resourceType: resourceUtils.getResourceTypeName(RESOURCE_TYPE),
            parentResourcePath: ''
        };
    }

    function getObjectId(subscription, servicePrincipalName, userPrincipalName, _) {

        var account
        if (servicePrincipalName) {
            account = getAccountBySPN(servicePrincipalName, _);
        } else if (userPrincipalName) {
            account = getAccountByUPN(userPrincipalName, _);
        } else {
            log.warn($("No object ID is selected. The current user's object ID will be used by default"));
            account = getAccountFromSubscription(subscription, _);
        }

        log.verbose(util.format($('Account objectId: %s'), account.objectId));
        return account.objectId;
    }

    function getAccountBySPN(spn, _) {
      
        log.verbose(util.format($('Getting account for SPN %s'), spn));

        var graphClient = getGraphClient();
        var accounts = graphClient.servicePrincipal.getByServicePrincipalName(spn, _).servicePrincipals;
        if (!accounts || accounts.length == 0) {
            throw new Error(util.format($('Unable to find service principal with spn %s'), spn));
        }
        if (accounts.length > 1) {
            throw new Error(util.format($('Ambiguity: multiple service principals found with spn %s. You can avoid this by specifying object id.'), spn));
        }
        return accounts[0];
    }

    function getAccountByUPN(upn, _) {

        log.verbose(util.format($('Getting account for UPN %s'), upn));
        
        var graphClient = getGraphClient();
        var accounts = graphClient.user.getBySignInName(upn, _).users;
        if (!accounts || accounts.length == 0) {
            throw new Error(util.format($('Unable to find user with upn %s'), upn));
        }
        if (accounts.length > 1) {
            throw new Error(util.format($('Ambiguity: multiple users principals found with upn %s. You can avoid this by specifying object id.'), upn));
        }
        return accounts[0];
    }

    function getAccountFromSubscription(subscription, _) {

        if (!subscription) {
            throw new Error('Subscription was not informed.');
        }

        if (!subscription.user) {
            throw new Error($('Current credentials are not from a user or service principal. Azure Key Vault does not work with certificate credentials.'));
        }

        switch (subscription.user.type) {
            case 'user':
                return getAccountByUPN(subscription.user.name, _);

            case 'servicePrincipal':
                return getAccountBySPN(subscription.user.name, _);

            default:
                throw new Error(util.format($('Unknown user type: %s'), subscription.user.type));
        }

    }

    function getGraphClient() {
        if (!graphClient) {
            var subscription = profile.current.getSubscription();
            graphClient = adUtils.getADGraphClient(subscription);
        }
        return graphClient;
    }

    function showVault(resource) {
        cli.interaction.formatOutput(resource, function(resource) {
            var resourceInformation = resourceUtils.getResourceInformation(resource.id);
            log.data($('Id:       '), resource.id);
            log.data($('Name:     '), resourceInformation.resourceName || resource.name);
            log.data($('Location: '), resource.location);
            log.data($('Tags:'));
            cli.interaction.logEachData('          ', resource.tags);
            log.data($('Properties:'));
            cli.interaction.logEachData('          ', resource.properties);
            log.data('');
        });
    }

}