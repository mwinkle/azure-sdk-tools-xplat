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
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplattestlbLbI\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI\",\r\n  \"etag\": \"W/\\\"647446ad-70d1-42d1-80f7-dcfba3b6be2a\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"816bb7a0-dcdf-4ee5-a43e-83c3460601fd\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"647446ad-70d1-42d1-80f7-dcfba3b6be2a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/publicIPAddresses/xplatTestIpLbNat\"\r\n          },\r\n          \"inboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestInboundNat\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"xplattestSecndFrontendIp\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestSecndFrontendIp\",\r\n        \"etag\": \"W/\\\"647446ad-70d1-42d1-80f7-dcfba3b6be2a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/publicIPAddresses/xplatTestSecndIpLbNat\"\r\n          },\r\n          \"inboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestSecndInboundNat\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"inboundNatRules\": [\r\n      {\r\n        \"name\": \"xplattestInboundNat\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestInboundNat\",\r\n        \"etag\": \"W/\\\"647446ad-70d1-42d1-80f7-dcfba3b6be2a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestFrontendIpName\"\r\n          },\r\n          \"frontendPort\": 3380,\r\n          \"backendPort\": 3380,\r\n          \"enableFloatingIP\": true,\r\n          \"idleTimeoutInMinutes\": 4,\r\n          \"protocol\": \"Tcp\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"xplattestSecndInboundNat\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestSecndInboundNat\",\r\n        \"etag\": \"W/\\\"647446ad-70d1-42d1-80f7-dcfba3b6be2a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestSecndFrontendIp\"\r\n          },\r\n          \"frontendPort\": 3383,\r\n          \"backendPort\": 3383,\r\n          \"enableFloatingIP\": true,\r\n          \"idleTimeoutInMinutes\": 4,\r\n          \"protocol\": \"Tcp\"\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4125',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"647446ad-70d1-42d1-80f7-dcfba3b6be2a"',
  'x-ms-request-id': '39b569d1-4822-488b-90c3-5265b15a8aaf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': 'd560faf9-2d62-4729-bf15-9fe899122427',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150730T075213Z:d560faf9-2d62-4729-bf15-9fe899122427',
  date: 'Thu, 30 Jul 2015 07:52:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplattestlbLbI\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI\",\r\n  \"etag\": \"W/\\\"647446ad-70d1-42d1-80f7-dcfba3b6be2a\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"816bb7a0-dcdf-4ee5-a43e-83c3460601fd\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"647446ad-70d1-42d1-80f7-dcfba3b6be2a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/publicIPAddresses/xplatTestIpLbNat\"\r\n          },\r\n          \"inboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestInboundNat\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"xplattestSecndFrontendIp\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestSecndFrontendIp\",\r\n        \"etag\": \"W/\\\"647446ad-70d1-42d1-80f7-dcfba3b6be2a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/publicIPAddresses/xplatTestSecndIpLbNat\"\r\n          },\r\n          \"inboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestSecndInboundNat\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"inboundNatRules\": [\r\n      {\r\n        \"name\": \"xplattestInboundNat\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestInboundNat\",\r\n        \"etag\": \"W/\\\"647446ad-70d1-42d1-80f7-dcfba3b6be2a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestFrontendIpName\"\r\n          },\r\n          \"frontendPort\": 3380,\r\n          \"backendPort\": 3380,\r\n          \"enableFloatingIP\": true,\r\n          \"idleTimeoutInMinutes\": 4,\r\n          \"protocol\": \"Tcp\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"xplattestSecndInboundNat\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestSecndInboundNat\",\r\n        \"etag\": \"W/\\\"647446ad-70d1-42d1-80f7-dcfba3b6be2a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestSecndFrontendIp\"\r\n          },\r\n          \"frontendPort\": 3383,\r\n          \"backendPort\": 3383,\r\n          \"enableFloatingIP\": true,\r\n          \"idleTimeoutInMinutes\": 4,\r\n          \"protocol\": \"Tcp\"\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4125',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"647446ad-70d1-42d1-80f7-dcfba3b6be2a"',
  'x-ms-request-id': '39b569d1-4822-488b-90c3-5265b15a8aaf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': 'd560faf9-2d62-4729-bf15-9fe899122427',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150730T075213Z:d560faf9-2d62-4729-bf15-9fe899122427',
  date: 'Thu, 30 Jul 2015 07:52:13 GMT',
  connection: 'close' });
 return result; }]];