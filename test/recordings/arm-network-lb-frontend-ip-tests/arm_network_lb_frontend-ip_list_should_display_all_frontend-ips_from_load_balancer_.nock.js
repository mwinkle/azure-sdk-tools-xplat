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
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/loadBalancers/armEmptyLB?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/loadBalancers/armEmptyLB\",\r\n  \"etag\": \"W/\\\"fd5a5c52-e0ea-4409-8393-de7712c73ab7\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"62906da0-42d8-459b-8feb-dc76a5b91e0b\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/loadBalancers/armEmptyLB/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"fd5a5c52-e0ea-4409-8393-de7712c73ab7\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/publicIPAddresses/xplatTestIp\"\r\n          }\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"xplatFrontendIpsecnd\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/loadBalancers/armEmptyLB/frontendIPConfigurations/xplatFrontendIpsecnd\",\r\n        \"etag\": \"W/\\\"fd5a5c52-e0ea-4409-8393-de7712c73ab7\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/publicIPAddresses/xplatTestsecndIP\"\r\n          }\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1801',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"fd5a5c52-e0ea-4409-8393-de7712c73ab7"',
  'x-ms-request-id': 'd63be10b-fcb6-4bc0-a9db-a57dd4949042',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14975',
  'x-ms-correlation-request-id': '5bd6b6dc-be57-4368-9949-a3846dc256f2',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150730T075410Z:5bd6b6dc-be57-4368-9949-a3846dc256f2',
  date: 'Thu, 30 Jul 2015 07:54:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/loadBalancers/armEmptyLB?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/loadBalancers/armEmptyLB\",\r\n  \"etag\": \"W/\\\"fd5a5c52-e0ea-4409-8393-de7712c73ab7\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"62906da0-42d8-459b-8feb-dc76a5b91e0b\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/loadBalancers/armEmptyLB/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"fd5a5c52-e0ea-4409-8393-de7712c73ab7\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/publicIPAddresses/xplatTestIp\"\r\n          }\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"xplatFrontendIpsecnd\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/loadBalancers/armEmptyLB/frontendIPConfigurations/xplatFrontendIpsecnd\",\r\n        \"etag\": \"W/\\\"fd5a5c52-e0ea-4409-8393-de7712c73ab7\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/publicIPAddresses/xplatTestsecndIP\"\r\n          }\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1801',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"fd5a5c52-e0ea-4409-8393-de7712c73ab7"',
  'x-ms-request-id': 'd63be10b-fcb6-4bc0-a9db-a57dd4949042',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14975',
  'x-ms-correlation-request-id': '5bd6b6dc-be57-4368-9949-a3846dc256f2',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150730T075410Z:5bd6b6dc-be57-4368-9949-a3846dc256f2',
  date: 'Thu, 30 Jul 2015 07:54:10 GMT',
  connection: 'close' });
 return result; }]];