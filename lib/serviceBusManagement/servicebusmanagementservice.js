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

var util = require('util');
var xml2js = require('xml2js');
var _ = require('underscore');

var azure = require('azure');
var Constants = azure.Constants;
var HeaderConstants = Constants.HeaderConstants;
var HttpResponseCodes = Constants.HttpConstants.HttpResponseCodes;
var WebResource = azure.WebResource;
var ServiceManagementClient = azure.ServiceManagementClient;
var namespaceNameIsValid = require('./nameValidation');
var parseResult = require('./parseserverresponse');

var js2xml = require('../util/js2xml');

module.exports = ServiceBusManagementService;

// Client for making requests to service bus endpoint

/**
*
* Creates a new ServiceBusManagementService object
*
* @constructor
* @param {string} subscriptionId   Subscription ID for the account or the connection string
* @param {object} authentication                    The authentication object for the client.
*                                                   {
*                                                     keyfile: 'path to .pem',
*                                                     certfile: 'path to .pem',
*                                                     keyvalue: privatekey value,
*                                                     certvalue: public cert value
*                                                   }
* @param {object} hostOptions                       The host options to override defaults.
*                                                   {
*                                                     host: 'management.core.windows.net',
*                                                     apiversion: '2012-03-01',
*                                                     serializetype: 'XML'
*                                                   }
*/

function ServiceBusManagementService(subscriptionId, authentication, hostOptions) {
  if (typeof subscriptionId !== 'string' || subscriptionId.length === 0) {
    throw new Error('A subscriptionId or a connection string is required');
  }

  ServiceBusManagementService.super_.call(this, authentication, hostOptions);

  this.subscriptionId = subscriptionId;
}

util.inherits(ServiceBusManagementService, ServiceManagementClient);

_.extend(ServiceBusManagementService.prototype, {

  /**
  * List the service bus namespaces defined on the account
  *
  * @param {function} callback Callback (err, results) invoked when results come back.
  *                            results is an array of namespaces
  */

  listNamespaces: function (callback) {
    validateArgs('listNamespaces', function (v) {
      v.callback(callback);
    });

    var path = this._makePath('Namespaces');
    this._getResult(path, 'get', 'NamespaceDescription', callback);
  },

  /**
  * Get details about a specific namespace
  *
  * @param {string} namespaceName name of the namespace to get details about
  *
  * @param {function} callback function (err, results) called when results come back.
  */
  getNamespace: function (namespaceName, callback) {
    validateArgs('getNamespace', function (v) {
      v.string(namespaceName, 'namespaceName');
      v.callback(callback);
    });

    var path = this._makePath('Namespaces') + namespaceName;
    this._getResult(path, 'get', 'NamespaceDescription', callback);
  },

  /**
  * Create a new Service Bus namespace
  *
  * @param {string} namespaceName name of the namespace to create
  *
  * @param {string} region region to create the namespace in
  *
  * @param {function} callback function(err, namespace) returns the
  *                            namespace description for the newly
  *                            created namespace.
  */
  createNamespace: function (namespaceName, region, callback) {
    validateArgs('createNamespace', function (v) {
      v.string(namespaceName, 'namespaceName');
      v.string(region, 'region');
      v.callback(callback);
    });

    if (namespaceNameIsValid(namespaceName, callback)) {
      var path = this._makePath('Namespaces') + namespaceName;
      var body = js2xml.serialize(createEntry('NamespaceDescription', { Region: region }));
      this._getResult(path, 'put', body, 'NamespaceDescription', callback);
    }
  },

  /**
  * Delete a service bus namespace
  *
  * @param {string} namespaceName name of namespace to delete
  * @param {function} callback  function(err) - recieves error (if any)
  *
  */
  deleteNamespace: function (namespaceName, callback) {
    validateArgs('deleteNamespace', function (v) {
      v.string(namespaceName, 'namespaceName');
    });

    if (namespaceNameIsValid(namespaceName, callback)) {
     var path = this._makePath('Namespaces') + namespaceName;
     this._getResult(path, 'del', 'NamespaceDescription', callback);
    }
  },

  /**
  * Get list of available Service Bus regions
  *
  * @param {function} callback
  */
  getRegions: function (callback) {
    validateArgs('getRegions', function (v) { v.callback(callback); } );

    var path = this._makePath('Regions');
    this._getResult(path, 'get', 'RegionCodeDescription', callback);
  },

  /**
  * Verify that a namespace name is valid and available.
  * @param {string} name namespace name to validate
  * @param {function} callback function (err, results) called when the check is complete.
  */
  verifyNamespace: function (name, callback) {
    if (namespaceNameIsValid(name, callback)) {
      var path = this._makePath('CheckNamespaceAvailability') + "?namespace=" + name;
      this._getResult(path, 'get', 'NamespaceAvailability', function (err, result) {
        if (err) {
          return callback(err);
        }

        callback(null, toBool(result.Result));
      });
    }
  },

  _makePath: function (operationName) {
    return '/' + this.subscriptionId + '/services/ServiceBus/' + operationName + '/';
  },

  _getResult: function (path, verb, requestBody, responseContentElementName, callback) {
    // requestBody can be omitted, normalize arguments if that's the case 
    if (_.isFunction(responseContentElementName)) {
      callback = responseContentElementName;
      responseContentElementName = requestBody;
      requestBody = null;
    }

    var webResource = WebResource[verb](path).withRawResponse(true).withOkCode(HttpResponseCodes.OK_CODE);

    if (requestBody) {
      webResource.addOptionalHeader(HeaderConstants.CONTENT_LENGTH, Buffer.byteLength(requestBody));
    }

    this.performRequest(webResource, requestBody, null, function (responseObject, next) {
      var finalCallback = function (returnObject) {
        if (!returnObject.response.isSuccessful) {
          return callback(returnObject.error, returnObject.response);
        }
        var result = parseResult(returnObject.response.body, responseContentElementName);
        callback(null, result);
      };

      next(responseObject, finalCallback);
    });
  },

  // base hard codes content type, so we have to override here
  // instead of passing it in the request headers.
  _getContentType: function () {
    return 'application/xml;type=entry;charset="utf-8"';
  }
});

// common functions for validating arguments

function validateArgs(functionName, validationRules) {
  var validator = new ArgumentValidator(functionName);
  validationRules(validator);
}

function ArgumentValidator(functionName) {
  this.func = functionName;
}

_.extend(ArgumentValidator.prototype, {
  string: function (val, name) {
    if (typeof val != 'string' || val.length === 0) {
      throwMissingArgument(name, this.func);
    }
  },
  object: function (val, name) {
     if (!val) {
      throwMissingArgument(name, this.func);
    }
  },
  value: function (val, name) {
    if (!val) {
      throwMissingArgument(name, this.func);
    }
  },
  callback: function (val) {
    this.object(val, 'callback');
  }
});

function throwMissingArgument(name, func) {
  throw new Error('Required argument ' + name + ' for function ' + func + ' is not defined');
}

function throwMissingValue(name, func) {
  throw new Error('Required value ' + name + ' for function ' + func + ' is not defined');
}

var stringToBoolTable = {
  'true': true,
  'false': false
};

function toBool(value) {
  return stringToBoolTable[value.toLowerCase()];
}

var ATOM_NAMESPACE = 'http://www.w3.org/2005/Atom';
var SB_NAMESPACE = 'http://schemas.microsoft.com/netservices/2010/10/servicebus/connect';

function createEntry(payloadElementName, payload) {
  var entry = { 
    entry: {
      '@': { xmlns: ATOM_NAMESPACE },
      content: {
        '@': { type: 'application/xml' }
      }
    }
  };
  entry.entry.content[payloadElementName] = payload;
  entry.entry.content[payloadElementName]['@'] = { xmlns: SB_NAMESPACE };
  return entry;
}
