﻿/**
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

var should = require('should');

var util = require('util');
var fs = require('fs');
var path = require('path');

var CLITest = require('../../../framework/arm-cli-test');
var testprefix = 'arm-cli-deployment-tests';

var testLocation = 'South Central US';

var createdGroups = [];
var createdDeployments = [];

describe('csm', function () {
  describe('deployment', function () {
    var suite;

    before(function (done) {
      suite = new CLITest(testprefix);
      suite.setupSuite(done);
    });

    after(function (done) {
      suite.teardownSuite(done);
    });

    beforeEach(function (done) {
      suite.setupTest(done);
    });

    afterEach(function (done) {
      suite.teardownTest(done);
    });

    describe('list and show', function () {
      it('should all work', function (done) {
        var parameterFile = path.join(__dirname, '../../../data/arm-deployment-parameters.json');
        var groupName = suite.generateId('xDeploymentTestGroup', createdGroups, suite.isMocked);
        var deploymentName = suite.generateId('Deploy1', createdDeployments, suite.isMocked);
        var templateFile = 'https://csmtest.blob.core.test-cint.azure-test.net/deployment-templates/20140228_232416_WebsiteNext.JSON';
        var commandToCreateDeployment = util.format('group deployment create -f %s -g %s -m Incremental -n %s -e %s --json -vv',
            templateFile, groupName, deploymentName, parameterFile);

        suite.execute('group create %s --location %s --quiet', groupName, testLocation, function (result) {
          result.exitStatus.should.equal(0);
          suite.execute(commandToCreateDeployment, function (result) {
            result.exitStatus.should.equal(0);

            suite.execute('group deployment show -g %s -n %s', groupName, deploymentName, function (showResult) {
              showResult.exitStatus.should.equal(0);
              showResult.text.indexOf(deploymentName).should.be.above(-1);

              suite.execute('group deployment list -g %s', groupName, function (listResult) {
                listResult.exitStatus.should.equal(0);
                listResult.text.indexOf(deploymentName).should.be.above(-1);
                //TODO: Uncomment after bug fix of "RDTask:1358492:Removing resource group failure caused by Antares resource provider"
                // suite.execute('group delete %s --quiet --json', groupName, function () {
                done();
              });
            });
          });
        });
      });
    });

    describe('stop', function () {
      it('should work', function (done) {
        var parameterFile = path.join(__dirname, '../../../data/arm-deployment-parameters.json');
        var groupName = suite.generateId('xDeploymentTestGroup', createdGroups, suite.isMocked);
        var deploymentName = suite.generateId('Deploy1', createdDeployments, suite.isMocked);
        var templateUri = 'https://csmtest.blob.core.test-cint.azure-test.net/deployment-templates/20140228_232416_WebsiteNext.JSON';
        var commandToCreateDeployment = util.format('group deployment create -f %s -g %s -m Incremental -n %s -e %s --json -vv',
            templateUri, groupName, deploymentName, parameterFile);

        suite.execute('group create %s --location %s --quiet', groupName, testLocation, function (result) {
          result.exitStatus.should.equal(0);
          suite.execute(commandToCreateDeployment, function (result) {
            result.exitStatus.should.equal(0);

            suite.execute('group deployment stop -g %s -n %s -q', groupName, deploymentName, function (listResult) {
              listResult.exitStatus.should.equal(0);

              //TODO: Uncomment after bug fix of "RDTask:1358492:Removing resource group failure caused by Antares resource provider"
              // suite.execute('group delete %s --quiet --json', groupName, function () {
              done();
            });
          });
        });
      });
    });

    describe('create', function () {
      it('should work with a remote file', function (done) {
        var parameterFile = path.join(__dirname, '../../../data/arm-deployment-parameters.json');
        var groupName = suite.generateId('xDeploymentTestGroup', createdGroups, suite.isMocked);
        var deploymentName = suite.generateId('Deploy1', createdDeployments, suite.isMocked);
        var templateUri = 'https://csmtest.blob.core.test-cint.azure-test.net/deployment-templates/20140228_232416_WebsiteNext.JSON';
        var commandToCreateDeployment = util.format('group deployment create -f %s -g %s -m Incremental -n %s -e %s -s %s --json -vv',
            templateUri, groupName, deploymentName, parameterFile, 'exptest1');

        suite.execute('group create %s --location %s --quiet', groupName, testLocation, function (result) {
          result.exitStatus.should.equal(0);
          suite.execute(commandToCreateDeployment, function (result) {
            result.exitStatus.should.equal(0);

            suite.execute('group deployment stop -g %s -n %s -q', groupName, deploymentName, function (listResult) {
              listResult.exitStatus.should.equal(0);

              //TODO: Uncomment after bug fix of "RDTask:1358492:Removing resource group failure caused by Antares resource provider"
              // suite.execute('group delete %s --quiet --json', groupName, function () {
              done();
            });
          });
        });
      });

      it('should all work with a local file', function (done) {
        var parameterFile = path.join(__dirname, '../../../data/arm-deployment-parameters.json');
        var groupName = suite.generateId('xDeploymentTestGroup', createdGroups, suite.isMocked);
        var deploymentName = suite.generateId('Deploy1', createdDeployments, suite.isMocked);
        var templateFile = path.join(__dirname, '../../../data/arm-deployment-template.json');
        var commandToCreateDeployment = util.format('group deployment create -f %s -g %s -m Incremental -n %s -e %s -s %s --json -vv',
            templateFile, groupName, deploymentName, parameterFile, 'exptest1');

        suite.execute('group create %s --location %s --quiet', groupName, testLocation, function (result) {
          result.exitStatus.should.equal(0);
          suite.execute(commandToCreateDeployment, function (result) {
            result.exitStatus.should.equal(0);

            suite.execute('group deployment show -g %s -n %s', groupName, deploymentName, function (showResult) {
              showResult.exitStatus.should.equal(0);
              showResult.text.indexOf(deploymentName).should.be.above(-1);

              suite.execute('group deployment list -g %s', groupName, function (listResult) {
                listResult.exitStatus.should.equal(0);
                listResult.text.indexOf(deploymentName).should.be.above(-1);
                //TODO: Uncomment after bug fix of "RDTask:1358492:Removing resource group failure caused by Antares resource provider"
                // suite.execute('group delete %s --quiet --json', groupName, function () {
                done();
              });
            });
          });
        });
      });

      it('should all work with a string for parameters', function (done) {
        var parameters = fs.readFileSync(path.join(__dirname, '../../../data/arm-deployment-parameters.json')).toString().replace(/\n/g, '').replace(/\r/g, '');
        var groupName = suite.generateId('xDeploymentTestGroup', createdGroups, suite.isMocked);
        var deploymentName = suite.generateId('Deploy1', createdDeployments, suite.isMocked);
        var templateFile = path.join(__dirname, '../../../data/arm-deployment-template.json');

        parameters = JSON.stringify(JSON.parse(parameters).properties.parameters);

        suite.execute('group create %s --location %s --quiet', groupName, testLocation, function (result) {
          result.exitStatus.should.equal(0);
          suite.execute('group deployment create -f %s -g %s -m Incremental -n %s -s %s -p %s --json -vv',
            templateFile, groupName, deploymentName, 'exptest1', parameters, function (result) {
            result.exitStatus.should.equal(0);

            suite.execute('group deployment show -g %s -n %s', groupName, deploymentName, function (showResult) {
              showResult.exitStatus.should.equal(0);
              showResult.text.indexOf(deploymentName).should.be.above(-1);

              suite.execute('group deployment list -g %s', groupName, function (listResult) {
                listResult.exitStatus.should.equal(0);
                listResult.text.indexOf(deploymentName).should.be.above(-1);
                //TODO: Uncomment after bug fix of "RDTask:1358492:Removing resource group failure caused by Antares resource provider"
                // suite.execute('group delete %s --quiet --json', groupName, function () {
                done();
              });
            });
          });
        });
      });

      it('should all work with a gallery template and a string for parameters', function (done) {
        var parameters = fs.readFileSync(path.join(__dirname, '../../../data/arm-deployment-parameters.json')).toString().replace(/\n/g, '').replace(/\r/g, '');
        var groupName = suite.generateId('xDeploymentTestGroup', createdGroups, suite.isMocked);
        var deploymentName = suite.generateId('Deploy1', createdDeployments, suite.isMocked);
        var galleryTemplate = 'Microsoft.ASPNETStarterSite.0.1.0-preview1';

        parameters = JSON.parse(parameters).properties.parameters;
        parameters.subscriptionId = {
          value: process.env['AZURE_SUBSCRIPTION_ID']
        };
        parameters.resourceGroup = {
          value: groupName
        };
        parameters = JSON.stringify(parameters);

        suite.execute('group create %s --location %s --quiet', groupName, testLocation, function (result) {
          result.exitStatus.should.equal(0);
          suite.execute('group deployment create -y %s -g %s -m Incremental -n %s -p %s --env %s --json -vv',
            galleryTemplate, groupName, deploymentName, parameters, process.env['AZURE_CSM_TEST_ENVIRONMENT'], function (result) {
            result.exitStatus.should.equal(0);

            suite.execute('group deployment show -g %s -n %s', groupName, deploymentName, function (showResult) {
              showResult.exitStatus.should.equal(0);
              showResult.text.indexOf(deploymentName).should.be.above(-1);

              suite.execute('group deployment list -g %s', groupName, function (listResult) {
                listResult.exitStatus.should.equal(0);
                listResult.text.indexOf(deploymentName).should.be.above(-1);
                //TODO: Uncomment after bug fix of "RDTask:1358492:Removing resource group failure caused by Antares resource provider"
                // suite.execute('group delete %s --quiet --json', groupName, function () {
                done();
              });
            });
          });
        });
      });
    });
  });
});