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
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip3036/?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"armpublicip3036\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip3036\",\r\n  \"etag\": \"W/\\\"42d6769f-f203-4aa4-bd63-82cb8445c8f5\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"ipAddress\": \"104.42.125.140\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 6,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip\",\r\n      \"fqdn\": \"dnstestpubip.westus.cloudapp.azure.com\",\r\n      \"reverseFqdn\": \"dnstestpubip15906.westus.cloudapp.azure.com\"\r\n    }\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '647',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"42d6769f-f203-4aa4-bd63-82cb8445c8f5"',
  'x-ms-request-id': 'ac608578-5daa-4996-b9c3-090e0e3dfc34',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31957',
  'x-ms-correlation-request-id': 'f577f924-abf5-4aaf-b4bd-1ba082270275',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090511Z:f577f924-abf5-4aaf-b4bd-1ba082270275',
  date: 'Mon, 27 Apr 2015 09:05:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip3036/?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"armpublicip3036\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip3036\",\r\n  \"etag\": \"W/\\\"42d6769f-f203-4aa4-bd63-82cb8445c8f5\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"ipAddress\": \"104.42.125.140\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 6,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip\",\r\n      \"fqdn\": \"dnstestpubip.westus.cloudapp.azure.com\",\r\n      \"reverseFqdn\": \"dnstestpubip15906.westus.cloudapp.azure.com\"\r\n    }\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '647',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"42d6769f-f203-4aa4-bd63-82cb8445c8f5"',
  'x-ms-request-id': 'ac608578-5daa-4996-b9c3-090e0e3dfc34',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31957',
  'x-ms-correlation-request-id': 'f577f924-abf5-4aaf-b4bd-1ba082270275',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090511Z:f577f924-abf5-4aaf-b4bd-1ba082270275',
  date: 'Mon, 27 Apr 2015 09:05:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip3036/?api-version=2015-05-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operationResults/9f160e92-b250-40f3-9a7c-ce4229253670?api-version=2015-05-01-preview',
  'retry-after': '10',
  'x-ms-request-id': '9f160e92-b250-40f3-9a7c-ce4229253670',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/9f160e92-b250-40f3-9a7c-ce4229253670?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1187',
  'x-ms-correlation-request-id': '1a91f586-2c20-40aa-8c92-da6622635865',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090516Z:1a91f586-2c20-40aa-8c92-da6622635865',
  date: 'Mon, 27 Apr 2015 09:05:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip3036/?api-version=2015-05-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operationResults/9f160e92-b250-40f3-9a7c-ce4229253670?api-version=2015-05-01-preview',
  'retry-after': '10',
  'x-ms-request-id': '9f160e92-b250-40f3-9a7c-ce4229253670',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/9f160e92-b250-40f3-9a7c-ce4229253670?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1187',
  'x-ms-correlation-request-id': '1a91f586-2c20-40aa-8c92-da6622635865',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090516Z:1a91f586-2c20-40aa-8c92-da6622635865',
  date: 'Mon, 27 Apr 2015 09:05:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/9f160e92-b250-40f3-9a7c-ce4229253670?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'baa28394-4ead-4c07-a773-ca6372272c45',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31952',
  'x-ms-correlation-request-id': 'e467d1cd-ab33-440b-8009-9368cbb26ca9',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090527Z:e467d1cd-ab33-440b-8009-9368cbb26ca9',
  date: 'Mon, 27 Apr 2015 09:05:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/9f160e92-b250-40f3-9a7c-ce4229253670?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'baa28394-4ead-4c07-a773-ca6372272c45',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31952',
  'x-ms-correlation-request-id': 'e467d1cd-ab33-440b-8009-9368cbb26ca9',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090527Z:e467d1cd-ab33-440b-8009-9368cbb26ca9',
  date: 'Mon, 27 Apr 2015 09:05:26 GMT',
  connection: 'close' });
 return result; }]];