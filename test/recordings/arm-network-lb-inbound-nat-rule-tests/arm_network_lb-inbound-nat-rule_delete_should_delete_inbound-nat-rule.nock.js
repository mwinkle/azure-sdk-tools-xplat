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
  .reply(200, "{\r\n  \"name\": \"xplattestlbLbI\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI\",\r\n  \"etag\": \"W/\\\"d44d343a-d7e1-4db4-9329-53af3165b952\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"816bb7a0-dcdf-4ee5-a43e-83c3460601fd\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"d44d343a-d7e1-4db4-9329-53af3165b952\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/publicIPAddresses/xplatTestIpLbNat\"\r\n          },\r\n          \"inboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestInboundNat\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"xplattestSecndFrontendIp\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestSecndFrontendIp\",\r\n        \"etag\": \"W/\\\"d44d343a-d7e1-4db4-9329-53af3165b952\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/publicIPAddresses/xplatTestSecndIpLbNat\"\r\n          },\r\n          \"inboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestSecndInboundNat\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"inboundNatRules\": [\r\n      {\r\n        \"name\": \"xplattestInboundNat\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestInboundNat\",\r\n        \"etag\": \"W/\\\"d44d343a-d7e1-4db4-9329-53af3165b952\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestFrontendIpName\"\r\n          },\r\n          \"frontendPort\": 3381,\r\n          \"backendPort\": 3381,\r\n          \"enableFloatingIP\": false,\r\n          \"idleTimeoutInMinutes\": 4,\r\n          \"protocol\": \"Udp\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"xplattestSecndInboundNat\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestSecndInboundNat\",\r\n        \"etag\": \"W/\\\"d44d343a-d7e1-4db4-9329-53af3165b952\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestSecndFrontendIp\"\r\n          },\r\n          \"frontendPort\": 3383,\r\n          \"backendPort\": 3383,\r\n          \"enableFloatingIP\": true,\r\n          \"idleTimeoutInMinutes\": 4,\r\n          \"protocol\": \"Tcp\"\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4126',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"d44d343a-d7e1-4db4-9329-53af3165b952"',
  'x-ms-request-id': '18f8524f-3956-43b4-9e38-9c270bdee3dd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '2cbd3707-4811-4fc4-ad3e-a9a41d784d1b',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150730T075216Z:2cbd3707-4811-4fc4-ad3e-a9a41d784d1b',
  date: 'Thu, 30 Jul 2015 07:52:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplattestlbLbI\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI\",\r\n  \"etag\": \"W/\\\"d44d343a-d7e1-4db4-9329-53af3165b952\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"816bb7a0-dcdf-4ee5-a43e-83c3460601fd\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"d44d343a-d7e1-4db4-9329-53af3165b952\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/publicIPAddresses/xplatTestIpLbNat\"\r\n          },\r\n          \"inboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestInboundNat\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"xplattestSecndFrontendIp\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestSecndFrontendIp\",\r\n        \"etag\": \"W/\\\"d44d343a-d7e1-4db4-9329-53af3165b952\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/publicIPAddresses/xplatTestSecndIpLbNat\"\r\n          },\r\n          \"inboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestSecndInboundNat\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"inboundNatRules\": [\r\n      {\r\n        \"name\": \"xplattestInboundNat\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestInboundNat\",\r\n        \"etag\": \"W/\\\"d44d343a-d7e1-4db4-9329-53af3165b952\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestFrontendIpName\"\r\n          },\r\n          \"frontendPort\": 3381,\r\n          \"backendPort\": 3381,\r\n          \"enableFloatingIP\": false,\r\n          \"idleTimeoutInMinutes\": 4,\r\n          \"protocol\": \"Udp\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"xplattestSecndInboundNat\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestSecndInboundNat\",\r\n        \"etag\": \"W/\\\"d44d343a-d7e1-4db4-9329-53af3165b952\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestSecndFrontendIp\"\r\n          },\r\n          \"frontendPort\": 3383,\r\n          \"backendPort\": 3383,\r\n          \"enableFloatingIP\": true,\r\n          \"idleTimeoutInMinutes\": 4,\r\n          \"protocol\": \"Tcp\"\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4126',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"d44d343a-d7e1-4db4-9329-53af3165b952"',
  'x-ms-request-id': '18f8524f-3956-43b4-9e38-9c270bdee3dd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '2cbd3707-4811-4fc4-ad3e-a9a41d784d1b',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150730T075216Z:2cbd3707-4811-4fc4-ad3e-a9a41d784d1b',
  date: 'Thu, 30 Jul 2015 07:52:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI?api-version=2015-05-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"xplattestlbLbI\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI\",\r\n  \"etag\": \"W/\\\"85437521-c84b-43c1-bd35-7f5d8af17f53\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"816bb7a0-dcdf-4ee5-a43e-83c3460601fd\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"85437521-c84b-43c1-bd35-7f5d8af17f53\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/publicIPAddresses/xplatTestIpLbNat\"\r\n          }\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"xplattestSecndFrontendIp\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestSecndFrontendIp\",\r\n        \"etag\": \"W/\\\"85437521-c84b-43c1-bd35-7f5d8af17f53\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/publicIPAddresses/xplatTestSecndIpLbNat\"\r\n          },\r\n          \"inboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestSecndInboundNat\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"inboundNatRules\": [\r\n      {\r\n        \"name\": \"xplattestSecndInboundNat\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestSecndInboundNat\",\r\n        \"etag\": \"W/\\\"85437521-c84b-43c1-bd35-7f5d8af17f53\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestSecndFrontendIp\"\r\n          },\r\n          \"frontendPort\": 3383,\r\n          \"backendPort\": 3383,\r\n          \"enableFloatingIP\": true,\r\n          \"idleTimeoutInMinutes\": 4,\r\n          \"protocol\": \"Tcp\"\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3002',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'fa0527a5-15e2-4fe2-abb0-ebfcacce4c53',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/southeastasia/operations/fa0527a5-15e2-4fe2-abb0-ebfcacce4c53?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '9099287a-8bf0-4466-a114-9fb72448e4b5',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150730T075216Z:9099287a-8bf0-4466-a114-9fb72448e4b5',
  date: 'Thu, 30 Jul 2015 07:52:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI?api-version=2015-05-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"xplattestlbLbI\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI\",\r\n  \"etag\": \"W/\\\"85437521-c84b-43c1-bd35-7f5d8af17f53\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"816bb7a0-dcdf-4ee5-a43e-83c3460601fd\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"85437521-c84b-43c1-bd35-7f5d8af17f53\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/publicIPAddresses/xplatTestIpLbNat\"\r\n          }\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"xplattestSecndFrontendIp\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestSecndFrontendIp\",\r\n        \"etag\": \"W/\\\"85437521-c84b-43c1-bd35-7f5d8af17f53\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/publicIPAddresses/xplatTestSecndIpLbNat\"\r\n          },\r\n          \"inboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestSecndInboundNat\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"inboundNatRules\": [\r\n      {\r\n        \"name\": \"xplattestSecndInboundNat\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestSecndInboundNat\",\r\n        \"etag\": \"W/\\\"85437521-c84b-43c1-bd35-7f5d8af17f53\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNat/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestSecndFrontendIp\"\r\n          },\r\n          \"frontendPort\": 3383,\r\n          \"backendPort\": 3383,\r\n          \"enableFloatingIP\": true,\r\n          \"idleTimeoutInMinutes\": 4,\r\n          \"protocol\": \"Tcp\"\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3002',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'fa0527a5-15e2-4fe2-abb0-ebfcacce4c53',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/southeastasia/operations/fa0527a5-15e2-4fe2-abb0-ebfcacce4c53?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '9099287a-8bf0-4466-a114-9fb72448e4b5',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150730T075216Z:9099287a-8bf0-4466-a114-9fb72448e4b5',
  date: 'Thu, 30 Jul 2015 07:52:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/southeastasia/operations/fa0527a5-15e2-4fe2-abb0-ebfcacce4c53?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4ba15c12-4ba4-4def-bc46-a0c9b7569918',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-correlation-request-id': '0022fafc-ebc1-46de-a739-a13d9b702e10',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150730T075217Z:0022fafc-ebc1-46de-a739-a13d9b702e10',
  date: 'Thu, 30 Jul 2015 07:52:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/southeastasia/operations/fa0527a5-15e2-4fe2-abb0-ebfcacce4c53?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4ba15c12-4ba4-4def-bc46-a0c9b7569918',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-correlation-request-id': '0022fafc-ebc1-46de-a739-a13d9b702e10',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150730T075217Z:0022fafc-ebc1-46de-a739-a13d9b702e10',
  date: 'Thu, 30 Jul 2015 07:52:16 GMT',
  connection: 'close' });
 return result; }]];