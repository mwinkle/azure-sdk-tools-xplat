// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/Microsoft.Network/loadBalancers?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"xplattestlb\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/Microsoft.Network/loadBalancers/xplattestlb\",\r\n      \"etag\": \"W/\\\"b692be2d-2b01-4d77-b804-5015c89787e7\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"location\": \"westus\",\r\n      \"tags\": {\r\n        \"tag\": \"\",\r\n        \"tag2\": \"val\"\r\n      }\r\n    }\r\n  ],\r\n  \"nextLink\": \"\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '476',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1ee9f144-2d42-4e42-b50a-2cfccebea4c8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31948',
  'x-ms-correlation-request-id': 'd6c18a7c-db24-4508-8efc-f1f8c79a9450',
  'x-ms-routing-request-id': 'EASTASIA:20150427T105556Z:d6c18a7c-db24-4508-8efc-f1f8c79a9450',
  date: 'Mon, 27 Apr 2015 10:55:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/Microsoft.Network/loadBalancers?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"xplattestlb\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/Microsoft.Network/loadBalancers/xplattestlb\",\r\n      \"etag\": \"W/\\\"b692be2d-2b01-4d77-b804-5015c89787e7\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"location\": \"westus\",\r\n      \"tags\": {\r\n        \"tag\": \"\",\r\n        \"tag2\": \"val\"\r\n      }\r\n    }\r\n  ],\r\n  \"nextLink\": \"\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '476',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1ee9f144-2d42-4e42-b50a-2cfccebea4c8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31948',
  'x-ms-correlation-request-id': 'd6c18a7c-db24-4508-8efc-f1f8c79a9450',
  'x-ms-routing-request-id': 'EASTASIA:20150427T105556Z:d6c18a7c-db24-4508-8efc-f1f8c79a9450',
  date: 'Mon, 27 Apr 2015 10:55:56 GMT',
  connection: 'close' });
 return result; }]];