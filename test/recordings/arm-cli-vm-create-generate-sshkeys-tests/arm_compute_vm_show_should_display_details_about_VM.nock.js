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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGVMCreateSSH/providers/Microsoft.Compute/virtualMachines/xplatsshvm?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"15.04\",\r\n        \"version\": \"15.04.201507070\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli7b826e6ac8bfd5a8-os-1437472856460\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatsshstorage16035.blob.core.windows.net/xplatsshstoragecnt19550/cli7b826e6ac8bfd5a8-os-1437472856460.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatsshvm\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIICjjCCAXqgAwIBAgIBATAJBgcqhkjOPQQBMAAwIhgPMjAxNTA3MjEwOTQxMDNa\\r\\nGA8yMDI1MDcyMTA5NDEwM1owGTELMAkGA1UEBhMCVVMxCjAIBgNVBAoMAWIwggEi\\r\\nMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCcJtuN1TWKBs4G+pw+3QKx0zsy\\r\\nND0rAbRitlYbpe488kTsiOgoFiOZ1HSVL39Q8xtFXIt4SywfrPB87z0E5p45XxiC\\r\\nQehAg7W1++/83wrQT4FVRu+S1wvxrRuoNM3Ffy9x5u34g6MW8QmSRKep9BNT+Kpf\\r\\nOi5Erw5pOuVCm4gz2L1TsFQ03T2ydD/jBC2lKAIKE4twZoywj1/PtOrjdMfUJkC9\\r\\nUEh/U6jUowTcuA8ApPwrQC/o/AAqwe6pc+cu+EsjuuTPO7UHnvsN/21ekIJU4lj8\\r\\nr5MbY7XXuVAHVcqf5HgXqwiDmma2vdN+nH8vsHEhSaIRXGlXR49oWE90bnnBAgMB\\r\\nAAEwCQYHKoZIzj0EAQOCAQEAa32kiVk03eviPzoqcHPTsLTKsrYTXjvQc1BvxqIc\\r\\n/wSfLszvGYrlCinNLhf0drGtJ/O7TLxETGGatySgLaDaekG41ihJ3DRwyk9/gI2N\\r\\n9AnrwRa+rtVNci4VCCKGRqklnu9ObmMLtRCnuHIsuiOUawAM73cS5sp723Gg5jRL\\r\\nlu0R1+KcQN9ngTFwd/fqdhpw4hEfNx5ipr8L8UAQ6BQfO58RQfAMkoYqdbZEPlld\\r\\n9OW/nK4uQ3vIF2wd78eYJNR2Xwx1tCCFeXrtxSm/eZiZG+LekZcMSDHBcy4rGY7Z\\r\\nifOIPJdUxOgpOx2sFzARjn1HU/LDLSdenxN0AEcjDLCZpA==\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"properties\":{},\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGVMCreateSSH/providers/Microsoft.Network/networkInterfaces/xplatsshnic\"}]},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGVMCreateSSH/providers/Microsoft.Compute/virtualMachines/xplatsshvm\",\r\n  \"name\": \"xplatsshvm\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2535',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'c37dca37-9c43-4151-b86b-477e6d65ea27_130788930493072380',
  'x-ms-request-id': '35e84459-c25e-45d7-b92c-6d7d7c9464c1',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14948',
  'x-ms-correlation-request-id': 'c4326b94-29bc-48a8-a997-be80e3833460',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150721T100814Z:c4326b94-29bc-48a8-a997-be80e3833460',
  date: 'Tue, 21 Jul 2015 10:08:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGVMCreateSSH/providers/Microsoft.Compute/virtualMachines/xplatsshvm?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"15.04\",\r\n        \"version\": \"15.04.201507070\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli7b826e6ac8bfd5a8-os-1437472856460\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatsshstorage16035.blob.core.windows.net/xplatsshstoragecnt19550/cli7b826e6ac8bfd5a8-os-1437472856460.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatsshvm\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIICjjCCAXqgAwIBAgIBATAJBgcqhkjOPQQBMAAwIhgPMjAxNTA3MjEwOTQxMDNa\\r\\nGA8yMDI1MDcyMTA5NDEwM1owGTELMAkGA1UEBhMCVVMxCjAIBgNVBAoMAWIwggEi\\r\\nMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCcJtuN1TWKBs4G+pw+3QKx0zsy\\r\\nND0rAbRitlYbpe488kTsiOgoFiOZ1HSVL39Q8xtFXIt4SywfrPB87z0E5p45XxiC\\r\\nQehAg7W1++/83wrQT4FVRu+S1wvxrRuoNM3Ffy9x5u34g6MW8QmSRKep9BNT+Kpf\\r\\nOi5Erw5pOuVCm4gz2L1TsFQ03T2ydD/jBC2lKAIKE4twZoywj1/PtOrjdMfUJkC9\\r\\nUEh/U6jUowTcuA8ApPwrQC/o/AAqwe6pc+cu+EsjuuTPO7UHnvsN/21ekIJU4lj8\\r\\nr5MbY7XXuVAHVcqf5HgXqwiDmma2vdN+nH8vsHEhSaIRXGlXR49oWE90bnnBAgMB\\r\\nAAEwCQYHKoZIzj0EAQOCAQEAa32kiVk03eviPzoqcHPTsLTKsrYTXjvQc1BvxqIc\\r\\n/wSfLszvGYrlCinNLhf0drGtJ/O7TLxETGGatySgLaDaekG41ihJ3DRwyk9/gI2N\\r\\n9AnrwRa+rtVNci4VCCKGRqklnu9ObmMLtRCnuHIsuiOUawAM73cS5sp723Gg5jRL\\r\\nlu0R1+KcQN9ngTFwd/fqdhpw4hEfNx5ipr8L8UAQ6BQfO58RQfAMkoYqdbZEPlld\\r\\n9OW/nK4uQ3vIF2wd78eYJNR2Xwx1tCCFeXrtxSm/eZiZG+LekZcMSDHBcy4rGY7Z\\r\\nifOIPJdUxOgpOx2sFzARjn1HU/LDLSdenxN0AEcjDLCZpA==\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"properties\":{},\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGVMCreateSSH/providers/Microsoft.Network/networkInterfaces/xplatsshnic\"}]},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGVMCreateSSH/providers/Microsoft.Compute/virtualMachines/xplatsshvm\",\r\n  \"name\": \"xplatsshvm\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2535',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'c37dca37-9c43-4151-b86b-477e6d65ea27_130788930493072380',
  'x-ms-request-id': '35e84459-c25e-45d7-b92c-6d7d7c9464c1',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14948',
  'x-ms-correlation-request-id': 'c4326b94-29bc-48a8-a997-be80e3833460',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150721T100814Z:c4326b94-29bc-48a8-a997-be80e3833460',
  date: 'Tue, 21 Jul 2015 10:08:14 GMT',
  connection: 'close' });
 return result; }]];