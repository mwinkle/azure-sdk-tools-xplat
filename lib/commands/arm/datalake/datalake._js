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
var util = require('util');

var profile = require('../../../util/profile');
var utils = require('../../../util/utils');
var $ = utils.getLocaleString;
var dataLakeUtils = require('./dataLake.utils');

exports.init = function (cli) {
  var log = cli.output;
  var withProgress = cli.interaction.withProgress.bind(cli.interaction);

  // This includes the following three categories:
  // Account Management (category of 'Account')
  // FileSystem Management (category of 'FileSystem')
  // FileSystem Permissions Management (category of 'Permissions')
 
  var dataLakeFileSystem = cli.category('datalakefilesystem')
    .description($('Commands to manage your Data Lake FileSystem'));
  
  dataLakeFileSystem.command('list [dataLakeAccountName] [path]')
    .description($('Lists the contents of the specified path (files and folders).'))
	.usage('[options] <dataLakeAccountName> <path>')
	.option('-n --dataLakeAccountName <dataLakeAccountName>', $('the Data Lake account name to execute the action on'))
	.option('-p --path <path>', $('the full path to the folder to list (e.g. /someFolder or /someFolder/someNestedFolder)'))
    .execute(function (dataLakeAccountName, path, options, _) {
	  if (!dataLakeAccountName) {
        return cli.missingArgument('dataLakeAccountName');
      }
	  
	  if (!path) {
        return cli.missingArgument('path');
      }
	  
	  var subscription = profile.current.getSubscription(options.subscription);
	  var client = utils.createDataLakeFileSystemManagementClient(subscription);
	  var parameters = {
		  top: 100 // we will always return the top 100 file entries in the path. In the future this should change to have a next link to return everything.
	  };
	  
	  var fileStatuses = client.fileSystem.listFileStatus(path, dataLakeAccountName, parameters, _).fileStatuses.fileStatus;
	  dataLakeUtils.formatOutputList(cli, log, options, fileStatuses);
	});
	
	dataLakeFileSystem.command('show [dataLakeAccountName] [path]')
    .description($('Gets the specified Data lake file or folder details'))
	.usage('[options] <dataLakeAccountName> <path>')
	.option('-n --dataLakeAccountName <dataLakeAccountName>', $('the Data Lake account name to execute the action on'))
	.option('-p --path <path>', $('the full path to the folder or file to get (e.g. /someFolder or /someFolder/someFile.txt)'))
    .execute(function (dataLakeAccountName, path, options, _) {
	  if (!dataLakeAccountName) {
        return cli.missingArgument('dataLakeAccountName');
      }
	  
	  if (!path) {
        return cli.missingArgument('path');
      }
	  
	  var subscription = profile.current.getSubscription(options.subscription);
	  var client = utils.createDataLakeFileSystemManagementClient(subscription);
	  
	  var fileStatus = client.fileSystem.getFileStatus(path, dataLakeAccountName, _).fileStatus;
	  dataLakeUtils.formatOutput(cli, log, options, fileStatus);
	});
	
	dataLakeFileSystem.command('delete [dataLakeAccountName] [path] [recurse]')
    .description($('deletes the specified Data lake file or folder, with the option for recursive delete (if the folder has contents)'))
	.usage('[options] <dataLakeAccountName> <path>')
	.option('-n --dataLakeAccountName <dataLakeAccountName>', $('the Data Lake account name to execute the action on'))
	.option('-p --path <path>', $('the full path to the folder or file to get (e.g. /someFolder or /someFolder/someFile.txt)'))
	.option('-r --recurse <recurse>', $('optionally indicates that this should be a recursive delete, which will delete a folder and all contents underneath it.'))
	.option('-q --quiet <quiet>', $('optionally indicates the delete should be immediately performed with no confirmation or prompting. Use carefully.'))
    .execute(function (dataLakeAccountName, path, recurse, options, _) {
	  if (!dataLakeAccountName) {
        return cli.missingArgument('dataLakeAccountName');
      }
	  
	  if (!path) {
        return cli.missingArgument('path');
      }
	  
	  if (!options.quiet && !cli.interaction.confirm(util.format($('Delete the file or folder at path: %s? [y/n] '), path), _)) {
        return;
      }
	  
	  var subscription = profile.current.getSubscription(options.subscription);
	  var client = utils.createDataLakeFileSystemManagementClient(subscription);
	  
	  if(!recurse || recurse.toLowerCase() !== 'true') {
		  recurse = false;
	  }
	  
	  client.fileSystem.deleteMethod(path, dataLakeAccountName, recurse, _)
	  log.info($('Successfully deleted the item at path: ' + path));
	});
	
	dataLakeFileSystem.command('create [dataLakeAccountName] [path] [value] [folder] [force]')
    .description($('Creates the specified folder or file, with the option to include content in file creation.'))
	.usage('[options] <dataLakeAccountName> <path> <value>')
	.option('-n --dataLakeAccountName <dataLakeAccountName>', $('the Data Lake account name to execute the action on'))
	.option('-p --path <path>', $('the full path to the file to add content to (e.g. /someFolder/someFile.txt)'))
	.option('-v --value <value>', $('optional indicates the contents (as a string) to create the file with. NOTE: This parameter cannot be specified with --folder (-d)'))
	.option('-d --folder <folder>', $('optionally specify that the item being created is a folder, not a file. If this is not specified, a file will be created. NOTE: This parameter cannot be specified with --encoding (-e) or --value (-v)'))
	.option('-f --force <force>', $('optionally indicates that the file or folder being created can overwrite the file or folder at path if it already exists (default is false). \'true\' must be passed in for the overwrite to work'))
    .execute(function (dataLakeAccountName, path, value, folder, force, options, _) {
	  if (!dataLakeAccountName) {
        return cli.missingArgument('dataLakeAccountName');
      }
	  
	  if (!path) {
        return cli.missingArgument('path');
      }
	  
	  if((value && folder)) {
		  throw new Error($('--folder cannot be specified with --value'));
	  }
	  
	  var subscription = profile.current.getSubscription(options.subscription);
	  var client = utils.createDataLakeFileSystemManagementClient(subscription);
	  
	  if(folder) {
		  log.info('about to call mkdir');
		  var result = client.fileSystem.mkdirs(path, dataLakeAccountName, null, _).operationResult;
		  log.info('value of result: ' + result);
		  if (result !== true) { // we pass in null for permissions because permission setting is not supported in public preview.
			 throw new Error($('Failed to create the desired directory!'));
		  }
	  }
	  else {
		  var parameters = {};
		  
		  if(force) {
			  parameters.overwrite = true;
		  }
		  else {
			  parameters.overwrite = false;
		  }
		  
		  parameters.permission = null;
		  
		  var response = client.fileSystem.internalBeginCreate(path, dataLakeAccountName, parameters, _);
		  client.fileSystem.create(response.location, value, _);
	  }
	  
	  log.info($('Successfully created the specified item at path:  ' + path));
	});
  
  dataLakeFileSystem.command('concat [dataLakeAccountName] [paths] [destination] [force]')
    .description($('Concatenates the specified list of files into the specified destination file.'))
	.usage('[options] <dataLakeAccountName> <paths> <destination> <force>')
	.option('-n --dataLakeAccountName <dataLakeAccountName>', $('the Data Lake account name to execute the action on'))
	.option('-p --paths <paths>', $('a comma seperated list of full paths to concatenate (e.g. \'/someFolder/someFile.txt,/somefolder/somefile2.txt,/anotherFolder/newFile.txt\')'))
	.option('-d --destination <destination>', $('specify the target file that all of the files in --paths should be concatenated into (e.g /someFolder/targetFile.txt)'))
	.option('-f --force <force>', $('optionally indicates that the file or folder being created can overwrite the file or folder at path if it already exists (default is false). \'true\' must be passed in for the overwrite to work'))
    .execute(function (dataLakeAccountName, paths, destination, force, options, _) {
	  if (!dataLakeAccountName) {
        return cli.missingArgument('dataLakeAccountName');
      }
	  
	  if (!paths) {
        return cli.missingArgument('paths');
      }
	  
	  if (!destination) {
        return cli.missingArgument('destination');
      }
	  
	  var subscription = profile.current.getSubscription(options.subscription);
	  var client = utils.createDataLakeFileSystemManagementClient(subscription);
	  
	  if(force) {
		  try {
		    var fileStatus = client.fileSystem.getFileStatus(destination, dataLakeAccountName, _).fileStatus;
			if (fileStatus.type.toLowerCase() === 'file') {
			  client.fileSystem.deleteMethod(destination, dataLakeAccountName, false, _);
			}
			else {
			  throw new Error($('Cannot forcibly concatenate files into a path that is an existing directory. Please use the delete command to remove the directory and try again.'));
			}
		  }
		  catch (err) {
			  // do nothing since this means the file does not exist and that is fine
		  }
	  }
	  
	  paths = 'sources=' + paths;
	  
	  var response = client.fileSystem.msConcat(destination, dataLakeAccountName, paths, _);
	  log.info($('Successfully concatenated the file list into the specified item at path:  ' + destination));
	});
  
  dataLakeFileSystem.command('move [dataLakeAccountName] [path] [destination] [force]')
    .description($('Concatenates the specified list of files into the specified destination file.'))
	.usage('[options] <dataLakeAccountName> <path> <destination> <force>')
	.option('-n --dataLakeAccountName <dataLakeAccountName>', $('the Data Lake account name to execute the action on'))
	.option('-p --path <path>', $('the path to the file or folder to move (e.g. /someFolder or /someFolder/someFile.txt)'))
	.option('-d --destination <destination>', $('specify the target location to move the file or folder to'))
	.option('-f --force <force>', $('optionally indicates that the file or folder being created can overwrite the file or folder at path if it already exists (default is false). \'true\' must be passed in for the overwrite to work'))
    .execute(function (dataLakeAccountName, path, destination, force, options, _) {
	  if (!dataLakeAccountName) {
        return cli.missingArgument('dataLakeAccountName');
      }
	  
	  if (!path) {
        return cli.missingArgument('paths');
      }
	  
	  if (!destination) {
        return cli.missingArgument('destination');
      }
	  
	  var subscription = profile.current.getSubscription(options.subscription);
	  var client = utils.createDataLakeFileSystemManagementClient(subscription);
	  
	  if(force) {
		  try {
		    var fileStatus = client.fileSystem.getFileStatus(destination, dataLakeAccountName, _).fileStatus;
			client.fileSystem.deleteMethod(destination, dataLakeAccountName, true, _);
		  }
		  catch (err) {
			  // do nothing since this means the file does not exist and that is fine
		  }
	  }
	  
	  var response = client.fileSystem.rename(path, dataLakeAccountName, destination, _);
	  if (!response.operationResult) {
		  throw new Error($('Failed to move source: ' + path + ' to destination: ' + destination + '. Please ensure the file or folder exists at the source and that the destination does not or force was used.'))
	  }
	  log.info($('Successfully moved the file or folder to: ' + destination));
	});
  
  dataLakeFileSystem.command('addcontent [dataLakeAccountName] [path] [value]')
    .description($('Appends the specified content to the end of the Data Lake file path specified.'))
	.usage('[options] <dataLakeAccountName> <path> <value>')
	.option('-n --dataLakeAccountName <dataLakeAccountName>', $('the Data Lake account name to execute the action on'))
	.option('-p --path <path>', $('the full path to the file to add content to (e.g. /someFolder/someFile.txt)'))
	.option('-v --value <value>', $('the contents to append to the file'))
    .execute(function (dataLakeAccountName, path, value, options, _) {
	  if (!dataLakeAccountName) {
        return cli.missingArgument('dataLakeAccountName');
      }
	  
	  if (!path) {
        return cli.missingArgument('path');
      }
	  
	  if (!value) {
        return cli.missingArgument('value');
      }
	  
	  var subscription = profile.current.getSubscription(options.subscription);
	  var client = utils.createDataLakeFileSystemManagementClient(subscription);
      var response = client.fileSystem.internalBeginAppend(path, dataLakeAccountName, null, _);
      client.fileSystem.append(response.location, value, _);
	  log.info($('Successfully appended content at the specified path:  ' + path));
	});
  
  dataLakeFileSystem.command('read [dataLakeAccountName] [path] [length] [offset]')
    .description($('Reads the specified Data Lake file starting at index 0 (or the specified offset) until the length is reached, outputting the results to the console.'))
	.usage('[options] <dataLakeAccountName> <path> <length> <offset>')
	.option('-n --dataLakeAccountName <dataLakeAccountName>', $('the Data Lake account name to execute the action on'))
	.option('-p --path <path>', $('the full path to the file to download (e.g. /someFolder/someFile.txt)'))
	.option('-l --length <length>', $('the length, in bytes, to read from the file'))
	.option('-o --offset <offset>', $('the optional offset to begin reading at (default is 0)'))
    .execute(function (dataLakeAccountName, path, length, offset, options, _) {
	if (!dataLakeAccountName) {
        return cli.missingArgument('dataLakeAccountName');
      }
	  
	  if (!path) {
        return cli.missingArgument('path');
      }
	  
	  if (!length) {
        return cli.missingArgument('length');
      }
	  
	  if(offset && offset < 0) {
		  throw new Error($('--offset must be greater than or equal to 0. Value passed in: ' + offset));
	  }
	  
	  var parameters = {
		  length: length
	  };
	  
	  if(offset) {
		  parameters.offset = offset;
	  }
	  else {
		  parameters.offset = 0;
	  }
	  
	  
	  var subscription = profile.current.getSubscription(options.subscription);
	  var client = utils.createDataLakeFileSystemManagementClient(subscription);
      var response = client.fileSystem.internalBeginOpen(path, dataLakeAccountName, parameters, _);
	  log.data(response.fileContents);
	});
  
  var dataLakeFileSystemPermissions = cli.category('datalakepermissions')
    .description($('Commands to manage your Data Lake FileSystem Permissions'));
 
 dataLakeFileSystemPermissions.command('show [dataLakeAccountName] [path]')
    .description($('Gets the specified Data lake folder ACL'))
	.usage('[options] <dataLakeAccountName> <path>')
	.option('-n --dataLakeAccountName <dataLakeAccountName>', $('the Data Lake account name to execute the action on'))
	.option('-p --path <path>', $('the full path to the folder or file to get (e.g. /someFolder or /someFolder/someFile.txt)'))
    .execute(function (dataLakeAccountName, path, options, _) {
	  if (!dataLakeAccountName) {
        return cli.missingArgument('dataLakeAccountName');
      }
	  
	  if (!path) {
        return cli.missingArgument('path');
      }
	  
	  var subscription = profile.current.getSubscription(options.subscription);
	  var client = utils.createDataLakeFileSystemManagementClient(subscription);
	  
	  var aclStatus = client.fileSystem.getAclStatus(path, dataLakeAccountName, _).aclStatus;
	  dataLakeUtils.formatOutput(cli, log, options, aclStatus);
	});
 
 dataLakeFileSystemPermissions.command('delete [dataLakeAccountName] [path] [defaultAcl]')
    .description($('Deletes the entire ACL associated with a folder'))
	.usage('[options] <dataLakeAccountName> <path> <default>')
	.option('-n --dataLakeAccountName <dataLakeAccountName>', $('the Data Lake account name to execute the action on'))
	.option('-p --path <path>', $('the full path to the folder to remove ACLs from (e.g. /someFolder)'))
	.option('-d --defaultAcl <defaultAcl>', $('optionally indicates that the default ACL should be removed instead of the regular ACL. Default is false.'))
	.option('-q, --quiet', $('quiet mode (do not ask for delete confirmation)'))
    .execute(function (dataLakeAccountName, path, options, _) {
	  if (!dataLakeAccountName) {
        return cli.missingArgument('dataLakeAccountName');
      }
	  
	  if (!path) {
        return cli.missingArgument('path');
      }
	  
	  if (!options.quiet && !cli.interaction.confirm(util.format($('Delete Data Lake ACLs for account %s at path %s? [y/n] '), dataLakeAccountName, path), _)) {
        return;
      }
	  
	  var subscription = profile.current.getSubscription(options.subscription);
	  var client = utils.createDataLakeFileSystemManagementClient(subscription);
	  
	  if(defaultAcl) {
		client.fileSystem.removeDefaultAcl(path, dataLakeAccountName, _);  
	  }
	  else {
		client.fileSystem.removeAcl(path, dataLakeAccountName, _);
	  }
	  log.info($('Successfully removed the specified ACL'));
	});
	
	dataLakeFileSystemPermissions.command('deleteentry [dataLakeAccountName] [path] [aclEntries]')
    .description($('Gets the specified Data lake file or folder details'))
	.usage('[options] <dataLakeAccountName> <path> <aclEntries>')
	.option('-n --dataLakeAccountName <dataLakeAccountName>', $('the Data Lake account name to execute the action on'))
	.option('-p --path <path>', $('the full path to the folder to remove ACLs from (e.g. /someFolder)'))
	.option('-a --aclEntries <aclEntries>', $('a comma delimited list of the fully qualified ACL entry to delete in the format [default:]<user>|<group>:<object Id> (e.g \'user:5546499e-795f-4f5f-b411-8179051f8b0a\' or \'default:group:5546499e-795f-4f5f-b411-8179051f8b0a\')'))
	.option('-q, --quiet', $('quiet mode (do not ask for delete confirmation)'))
    .execute(function (dataLakeAccountName, path, options, _) {
	  if (!dataLakeAccountName) {
        return cli.missingArgument('dataLakeAccountName');
      }
	  
	  if (!path) {
        return cli.missingArgument('path');
      }
	  
	  if (!aclEntries) {
        return cli.missingArgument('aclEntries');
      }
	  
	  if (!options.quiet && !cli.interaction.confirm(util.format($('Delete Data Lake ACL entries: %s for account %s at path %s? [y/n] '), aclEntries, dataLakeAccountName, path), _)) {
        return;
      }
	  
	  var subscription = profile.current.getSubscription(options.subscription);
	  var client = utils.createDataLakeFileSystemManagementClient(subscription);
	  
	  client.fileSystem.removeAclEntries(path, dataLakeAccountName, aclEntries, _);
	  log.info($('Successfully removed the specified ACL entries'));
	});
	
	dataLakeFileSystemPermissions.command('setentry [dataLakeAccountName] [path] [aclEntries]')
    .description($('sets the specified Data lake folder ACL entries'))
	.usage('[options] <dataLakeAccountName> <path> <aclEntries>')
	.option('-n --dataLakeAccountName <dataLakeAccountName>', $('the Data Lake account name to execute the action on'))
	.option('-p --path <path>', $('the full path to the folder to remove ACLs from (e.g. /someFolder)'))
	.option('-a --aclEntries <aclEntries>', $('a comma delimited list of the fully qualified ACL entries to set in the format [default:]<user>|<group>:<object Id>:<permissions> (e.g \'user:5546499e-795f-4f5f-b411-8179051f8b0a:r-x\' or \'default:group:5546499e-795f-4f5f-b411-8179051f8b0a:rwx\')'))
	.option('-q, --quiet', $('quiet mode (do not ask for overwrite confirmation)'))
    .execute(function (dataLakeAccountName, path, options, _) {
	  if (!dataLakeAccountName) {
        return cli.missingArgument('dataLakeAccountName');
      }
	  
	  if (!path) {
        return cli.missingArgument('path');
      }
	  
	  if (!aclEntries) {
        return cli.missingArgument('aclEntries');
      }
	  
	  if (!options.quiet && !cli.interaction.confirm(util.format($('Potentially overwrite existing Data Lake ACL entries: %s for account %s at path %s? [y/n] '), aclEntries, dataLakeAccountName, path), _)) {
        return;
      }
	  
	  var subscription = profile.current.getSubscription(options.subscription);
	  var client = utils.createDataLakeFileSystemManagementClient(subscription);
	  
	  client.fileSystem.modifyAclEntries(path, dataLakeAccountName, aclEntries, _);
	  log.info($('Successfully set the specified ACL entries'));
	});
	
	dataLakeFileSystemPermissions.command('set [dataLakeAccountName] [path] [aclSpec]')
    .description($('sets the specified Data lake folder ACL (overwriting the previous ACL entries)'))
	.usage('[options] <dataLakeAccountName> <path> <aclSpec>')
	.option('-n --dataLakeAccountName <dataLakeAccountName>', $('the Data Lake account name to execute the action on'))
	.option('-p --path <path>', $('the full path to the folder to remove ACLs from (e.g. /someFolder)'))
	.option('-a --aclSpec <aclSpec>', $('a comma delimited list of fully qualified ACL entries to set in the format [default:]<user>|<group>:<object Id>:<permissions> (e.g \'user:5546499e-795f-4f5f-b411-8179051f8b0a:r-x\' or \'default:group:5546499e-795f-4f5f-b411-8179051f8b0a:rwx\'). This list must also include default entries (no object ID in the middle)'))
	.option('-q, --quiet', $('quiet mode (do not ask for overwrite confirmation)'))
    .execute(function (dataLakeAccountName, path, options, _) {
	  if (!dataLakeAccountName) {
        return cli.missingArgument('dataLakeAccountName');
      }
	  
	  if (!path) {
        return cli.missingArgument('path');
      }
	  
	  if (!aclSpec) {
        return cli.missingArgument('aclSpec');
      }
	  
	  if (!options.quiet && !cli.interaction.confirm(util.format($('Overwrite existing Data Lake ACL with the following ACL: %s for account %s at path %s? [y/n] '), aclSpec, dataLakeAccountName, path), _)) {
        return;
      }
	  
	  var subscription = profile.current.getSubscription(options.subscription);
	  var client = utils.createDataLakeFileSystemManagementClient(subscription);
	  
	  client.fileSystem.setAcl(path, dataLakeAccountName, aclSpec, _);
	  log.info($('Successfully set the ACL'));
	});
	
  var dataLakeAccount = cli.category('datalakeaccount')
    .description($('Commands to manage your Data Lake accounts'));
 
  dataLakeAccount.command('list [resourceGroup]')
    .description($('List all Data Lake accounts available for your subscription or subscription and resource group'))
    .usage('[options] <resourceGroup>')
    .option('-g --resourceGroup <resourceGroup>', $('the optional resource group to list the accounts in'))
    .execute(function (resourceGroup, options, _) {
      var subscription = profile.current.getSubscription(options.subscription);
      var accounts = listAllDataLakeAccounts(subscription, resourceGroup, _);
      dataLakeUtils.formatOutputList(cli, log, options, accounts);
    });

  dataLakeAccount.command('show [dataLakeAccountName] [resourceGroup]')
    .description($('Shows a Data Lake Account based on account name'))
    .usage('[options] <dataLakeAccountName> <resourceGroup>')
    .option('-n --dataLakeAccountName <dataLakeAccountName>', $('the dataLakeAccount name'))
	.option('-g --resourceGroup <resourceGroup>', $('the optional resource group to list the accounts in'))
    .execute(function (dataLakeAccountName, resourceGroup, options, _) {
      if (!dataLakeAccountName) {
        return cli.missingArgument('dataLakeAccountName');
      }
	  
      var subscription = profile.current.getSubscription(options.subscription);
      var client = utils.createDataLakeManagementClient(subscription);
      
	  if(!resourceGroup)
	  {
		  resourceGroup = getResrouceGroupByAccountName(subscription, resourceGroup, dataLakeAccountName, _);
	  }
	  
      var dataLakeAccount = client.dataLakeAccount.get(resourceGroup, dataLakeAccountName, _).dataLakeAccount;

      dataLakeUtils.formatOutput(cli, log, options, dataLakeAccount);
    });
	
	dataLakeAccount.command('delete [dataLakeAccountName] [resourceGroup]')
    .description($('Deletes a Data Lake Account based on account name'))
    .usage('[options] <dataLakeAccountName> <resourceGroup>')
    .option('-n --dataLakeAccountName <dataLakeAccountName>', $('the dataLakeAccount name'))
	.option('-g --resourceGroup <resourceGroup>', $('the optional resource group to force the command to find the Data Lake account to delete in.'))
	.option('-q, --quiet', $('quiet mode (do not ask for delete confirmation)'))
    .execute(function (dataLakeAccountName, resourceGroup, options, _) {
      if (!dataLakeAccountName) {
        return cli.missingArgument('dataLakeAccountName');
      }
	  
	  if (!options.quiet && !cli.interaction.confirm(util.format($('Delete Data Lake Account %s? [y/n] '), dataLakeAccountName), _)) {
        return;
      }
	  
      var subscription = profile.current.getSubscription(options.subscription);
      var client = utils.createDataLakeManagementClient(subscription);
      
	  if(!resourceGroup)
	  {
		  resourceGroup = getResrouceGroupByAccountName(subscription, resourceGroup, dataLakeAccountName, _);
	  }
	  
      var response = client.dataLakeAccount.deleteMethod(resourceGroup, dataLakeAccountName, _);
	  
	  if (response.Status !== 'Succeeded') {
		 throw new Error(util.format($('Data Lake account operation failed with the following error code: %s and message: %s', response.error.code, response.error.message)));
	  }
	  
	  log.info($('Successfully deleted the specified Data Lake account.'));
    });
	
	dataLakeAccount.command('create [dataLakeAccountName] [location] [resourceGroup] [defaultGroup] [tags]')
    .description($('Creates a Data Lake Account'))
    .usage('[options] <dataLakeAccountName> <location> <resourceGroup> <defaultGroup> <tags>')
    .option('-n --dataLakeAccountName <dataLakeAccountName>', $('The Data Lake account name to create'))
	.option('-l --location <location>', $('the location the Data Lake account will be created in. Valid values are: North Central US, South Central US, Central US, West Europe, North Europe, West US, East US, East US 2, Japan East, Japan West, Brazil South, Southeast Asia, East Asia, Australia East, Australia Southeast'))
	.option('-g --resourceGroup <resourceGroup>', $('the resource group to create the account in'))
	.option('-d --defaultGroup <defaultGroup>', $('the optional default permissions group to add to the account when created'))
	.option('-t --tags <tags>', $('the optional key, value paired set of tags to associate with this account resource.'))
    .execute(function (dataLakeAccountName, location, resourceGroup, defaultGroup, tags, options, _) {
      var subscription = profile.current.getSubscription(options.subscription);
      var dataLakeAccount = createOrUpdateDataLakeAccount(subscription, dataLakeAccountName, resourceGroup, location, defaultGroup, tags, _);
      dataLakeUtils.formatOutput(cli, log, options, dataLakeAccount);
    });
  
	dataLakeAccount.command('set [dataLakeAccountName] [resourceGroup] [defaultGroup] [tags]')
    .description($('Creates a Data Lake Account'))
    .usage('[options] <dataLakeAccountName> <resourceGroup> <defaultGroup> <tags>')
    .option('-n --dataLakeAccountName <dataLakeAccountName>', $('The Data Lake account name to update with new tags and/or default permissions group'))
	.option('-g --resourceGroup <resourceGroup>', $('the optional resource group to forcibly look for the account to update in'))
	.option('-d --defaultGroup <defaultGroup>', $('the optional default permissions group to set in the existing account'))
	.option('-t --tags <tags>', $('the optional key, value paired set of tags to associate with this account resource.'))
    .execute(function (dataLakeAccountName, resourceGroup, defaultGroup, tags, options, _) {
      var subscription = profile.current.getSubscription(options.subscription);
	  var client = utils.createDataLakeManagementClient(subscription);
	  
	  if (!resourceGroup) {
		  resourceGroup = getResrouceGroupByAccountName(subscription, resourceGroup, dataLakeAccountName, _);
	  }
	  
	  var dataLakeAccount = client.dataLakeAccount.get(resourceGroup, dataLakeAccountName, _).dataLakeAccount;
	  
	  if (!defaultGroup) {
		  defaultGroup = dataLakeAccount.properties.configuration.defaultGroup;
	  }
	  if(!tags) {
		  tags = dataLakeAccount.tags;
	  }
	  
      dataLakeAccount  = createOrUpdateDataLakeAccount(subscription, dataLakeAccountName, resourceGroup, dataLakeAccount.location, defaultGroup, tags, _);
      dataLakeUtils.formatOutput(cli, log, options, dataLakeAccount);     
    });
	
  function createOrUpdateDataLakeAccount(subscription, dataLakeAccountName, resourceGroup, location, defaultGroup, tags, _) {
	  if (!dataLakeAccountName) {
        return cli.missingArgument('dataLakeAccountName');
      }
	  if (!location) {
        return cli.missingArgument('location');
      }
	  if (!resourceGroup) {
        return cli.missingArgument('resourceGroup');
      }
	  
	  var client = utils.createDataLakeManagementClient(subscription);
	  var create = false;
	  try {
		var dataLakeAccount = client.dataLakeAccount.get(resourceGroup, dataLakeAccountName, _);
	  }
	  catch(err){
		create = true;
	  }
	  
	  var accountParams = {
		  dataLakeAccount: {
			  name: dataLakeAccountName,
			  location: location,
			  properties: {
				  configuration: {
					  defaultGroup: defaultGroup
				  }
			  },
			  tags: tags
		  }
	  }
	  
	  if(create) {
		  var response = client.dataLakeAccount.create(resourceGroup, accountParams, _);
	  }
	  else {
		  var response = client.dataLakeAccount.update(resourceGroup, accountParams, _);
	  }
	  
	  if (response.status !== 'Succeeded') {
		 throw new Error(util.format($('Data Lake account operation failed with the following error code: %s and message: %s', response.error.code, response.error.message)));
	  }
	  
	  return client.dataLakeAccount.get(resourceGroup, dataLakeAccountName, _).dataLakeAccount;
  }
  
  function listAllDataLakeAccounts(subscription, resourceGroup, _) {
	var client = utils.createDataLakeManagementClient(subscription);
	var response = client.dataLakeAccount.list(resourceGroup, _);
	var accounts = response.value;
	while (response.nextLink)
	{
		response = client.dataLakeAccount.listNext(response.nextLink);
		accounts.push.apply(accounts, response.value);
	}
	
	return accounts;
  }
  
  function getResrouceGroupByAccountName(subscription, resourceGroup, name, _) {
    var accounts = listAllDataLakeAccounts(subscription, resourceGroup, _);
	for (var i = 0; i < accounts.length; i++)
	{
		if (accounts[i].name === name)
		{
			var acctId = accounts[i].id;
			var rgStart = acctId.indexOf('resourceGroups/') + ('resourceGroups/'.length);
			var rgEnd = acctId.indexOf('/providers/');
			return acctId.substring(rgStart, rgEnd);
		}
	}
	
	throw new Error($('Could not find account: ' + name + ' in any resource group in subscription: ' + subscription ));
  }
  
  function convertStringToByteArray(str) {
	var result = [];
	for (var i = 0; i < str.length; i++) {
		result.push(str.charCodeAt(i).toString(2));
	}
	return result;
  }
  
  function convertByteArrayToString(array) {
    var result = "";
    for (var i = 0; i < array.length; i++) {
      result += String.fromCharCode(parseInt(array[i], 2));
    }
    return result;
  }
};