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
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreateLb?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGCreateLb' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '31954',
  'x-ms-request-id': 'efc889ea-e125-4395-8bae-1af5011a3a24',
  'x-ms-correlation-request-id': 'efc889ea-e125-4395-8bae-1af5011a3a24',
  'x-ms-routing-request-id': 'EASTASIA:20150427T091723Z:efc889ea-e125-4395-8bae-1af5011a3a24',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 27 Apr 2015 09:17:23 GMT',
  connection: 'close',
  'content-length': '110' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreateLb?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGCreateLb' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '31954',
  'x-ms-request-id': 'efc889ea-e125-4395-8bae-1af5011a3a24',
  'x-ms-correlation-request-id': 'efc889ea-e125-4395-8bae-1af5011a3a24',
  'x-ms-routing-request-id': 'EASTASIA:20150427T091723Z:efc889ea-e125-4395-8bae-1af5011a3a24',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 27 Apr 2015 09:17:23 GMT',
  connection: 'close',
  'content-length': '110' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreateLb?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb\",\"name\":\"xplatTestGCreateLb\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '199',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1188',
  'x-ms-request-id': '5b14944a-facc-42b1-b72c-f0251a8e86c5',
  'x-ms-correlation-request-id': '5b14944a-facc-42b1-b72c-f0251a8e86c5',
  'x-ms-routing-request-id': 'EASTASIA:20150427T091725Z:5b14944a-facc-42b1-b72c-f0251a8e86c5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 27 Apr 2015 09:17:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreateLb?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb\",\"name\":\"xplatTestGCreateLb\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '199',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1188',
  'x-ms-request-id': '5b14944a-facc-42b1-b72c-f0251a8e86c5',
  'x-ms-correlation-request-id': '5b14944a-facc-42b1-b72c-f0251a8e86c5',
  'x-ms-routing-request-id': 'EASTASIA:20150427T091725Z:5b14944a-facc-42b1-b72c-f0251a8e86c5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 27 Apr 2015 09:17:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/Microsoft.Network/loadBalancers/xplattestlb?api-version=2015-05-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '46bf945d-59c1-47ae-b949-73513c1c8f8b',
  'x-ms-correlation-request-id': '46bf945d-59c1-47ae-b949-73513c1c8f8b',
  'x-ms-routing-request-id': 'EASTASIA:20150427T091726Z:46bf945d-59c1-47ae-b949-73513c1c8f8b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 27 Apr 2015 09:17:25 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/Microsoft.Network/loadBalancers/xplattestlb?api-version=2015-05-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '46bf945d-59c1-47ae-b949-73513c1c8f8b',
  'x-ms-correlation-request-id': '46bf945d-59c1-47ae-b949-73513c1c8f8b',
  'x-ms-routing-request-id': 'EASTASIA:20150427T091726Z:46bf945d-59c1-47ae-b949-73513c1c8f8b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 27 Apr 2015 09:17:25 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/Microsoft.Network/loadBalancers/xplattestlb?api-version=2015-05-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"xplattestlb\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/Microsoft.Network/loadBalancers/xplattestlb\",\r\n  \"etag\": \"W/\\\"cd5fb523-cfcb-458e-99b2-868cd262d31f\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag\": \"\",\r\n    \"tag2\": \"val\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '380',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a36fe625-c2ac-43f9-8dae-a4277b52060c',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/a36fe625-c2ac-43f9-8dae-a4277b52060c?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1186',
  'x-ms-correlation-request-id': 'd3aff258-132c-4d04-9dd9-af1c27417853',
  'x-ms-routing-request-id': 'EASTASIA:20150427T091732Z:d3aff258-132c-4d04-9dd9-af1c27417853',
  date: 'Mon, 27 Apr 2015 09:17:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/Microsoft.Network/loadBalancers/xplattestlb?api-version=2015-05-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"xplattestlb\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/Microsoft.Network/loadBalancers/xplattestlb\",\r\n  \"etag\": \"W/\\\"cd5fb523-cfcb-458e-99b2-868cd262d31f\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag\": \"\",\r\n    \"tag2\": \"val\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '380',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a36fe625-c2ac-43f9-8dae-a4277b52060c',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/a36fe625-c2ac-43f9-8dae-a4277b52060c?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1186',
  'x-ms-correlation-request-id': 'd3aff258-132c-4d04-9dd9-af1c27417853',
  'x-ms-routing-request-id': 'EASTASIA:20150427T091732Z:d3aff258-132c-4d04-9dd9-af1c27417853',
  date: 'Mon, 27 Apr 2015 09:17:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/a36fe625-c2ac-43f9-8dae-a4277b52060c?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1caa2e95-3326-4604-8040-4d5d8e797f87',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31956',
  'x-ms-correlation-request-id': 'ec86cff0-ce62-41b2-9d52-f5cf15c42a7c',
  'x-ms-routing-request-id': 'EASTASIA:20150427T091733Z:ec86cff0-ce62-41b2-9d52-f5cf15c42a7c',
  date: 'Mon, 27 Apr 2015 09:17:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/a36fe625-c2ac-43f9-8dae-a4277b52060c?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1caa2e95-3326-4604-8040-4d5d8e797f87',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31956',
  'x-ms-correlation-request-id': 'ec86cff0-ce62-41b2-9d52-f5cf15c42a7c',
  'x-ms-routing-request-id': 'EASTASIA:20150427T091733Z:ec86cff0-ce62-41b2-9d52-f5cf15c42a7c',
  date: 'Mon, 27 Apr 2015 09:17:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/Microsoft.Network/loadBalancers/xplattestlb?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplattestlb\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/Microsoft.Network/loadBalancers/xplattestlb\",\r\n  \"etag\": \"W/\\\"cd5fb523-cfcb-458e-99b2-868cd262d31f\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag\": \"\",\r\n    \"tag2\": \"val\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '380',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"cd5fb523-cfcb-458e-99b2-868cd262d31f"',
  'x-ms-request-id': 'de0e0072-4a0a-427c-88dc-e6b9f597ff2e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31961',
  'x-ms-correlation-request-id': '5eb87068-6e7b-4f69-9f55-9fb7161ff7fa',
  'x-ms-routing-request-id': 'EASTASIA:20150427T091734Z:5eb87068-6e7b-4f69-9f55-9fb7161ff7fa',
  date: 'Mon, 27 Apr 2015 09:17:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/Microsoft.Network/loadBalancers/xplattestlb?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplattestlb\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/Microsoft.Network/loadBalancers/xplattestlb\",\r\n  \"etag\": \"W/\\\"cd5fb523-cfcb-458e-99b2-868cd262d31f\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag\": \"\",\r\n    \"tag2\": \"val\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '380',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"cd5fb523-cfcb-458e-99b2-868cd262d31f"',
  'x-ms-request-id': 'de0e0072-4a0a-427c-88dc-e6b9f597ff2e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31961',
  'x-ms-correlation-request-id': '5eb87068-6e7b-4f69-9f55-9fb7161ff7fa',
  'x-ms-routing-request-id': 'EASTASIA:20150427T091734Z:5eb87068-6e7b-4f69-9f55-9fb7161ff7fa',
  date: 'Mon, 27 Apr 2015 09:17:34 GMT',
  connection: 'close' });
 return result; }]];