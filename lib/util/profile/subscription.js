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

var _ = require('underscore');
var azure = require('azure');
var url = require('url');

var adalAuth = require('../authentication/adalAuth');
var AccessTokenCloudCredentials = require('../authentication/accessTokenCloudCredentials');
var log = require('../logging');
var utils = require('../utils');
var $ = utils.getLocaleString;

function Subscription(subscriptionData) {
  if (subscriptionData.accessToken) {
    subscriptionData.accessToken = new adalAuth.AdalAccessToken(
      subscriptionData.accessToken.authConfig,
      subscriptionData.accessToken.accessToken,
      subscriptionData.accessToken.refreshToken,
      subscriptionData.accessToken.expiresAt);
  }
  _.extend(this, subscriptionData);
  this.isDefault = this.isDefault || false;
}

_.extend(Subscription.prototype, {
  /**
  * Create new-style rest client object
  *
  * @param factory factory function to create client object
  */
  createClient: function (factory) {
    if(_.isString(factory)) {
      factory = azure[factory];
    }
    var client = factory(this._createCredentials(),
      utils.stringTrimEnd(this.managementEndpointUrl, '/'))
      .withFilter(log.createLogFilter())
      .withFilter(azure.UserAgentFilter.create(utils.getUserAgent()))
      .withFilter(utils.createPostBodyFilter())
      .withFilter(utils.createFollowRedirectFilter())
      .withFilter(utils.createFollowRedirectFilter());
    return client;
  },

  /**
  * Create old-style service object
  * @param {string} serviceFactoryName name of factory function off azure module
  */
  createService: function (serviceFactoryName) {
    var managementEndpoint = url.parse(this.managementEndpointUrl);
    var service = azure[serviceFactoryName](this.id, {
      keyvalue: this.managementCertificate.key,
      certvalue: this.managementCertificate.cert,
    },
    {
      host: managementEndpoint.hostname,
      port: managementEndpoint.port,
      serializetype: 'XML'
    }).withFilter(new utils.RequestLogFilter(log));
    return service;
  },

  _createCredentials: function () {
    if (this.accessToken) {
      return new AccessTokenCloudCredentials(this.accessToken, this.id);
    }

    if (this.managementCertificate) {
      return new azure.CertificateCloudCredentials({
        subscriptionId: this.id,
        cert: this.managementCertificate.cert,
        key: this.managementCertificate.key
      });
    }

    throw new Error($('No token or management certificate, cannot create credentials'));
  }
});

module.exports = Subscription;