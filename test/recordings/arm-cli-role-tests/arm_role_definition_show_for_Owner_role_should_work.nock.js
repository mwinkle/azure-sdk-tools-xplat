// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '3ca49042-782a-4cc9-89b5-ee1b487fe115',
    name: 'AzSdkCore1',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '1449d5b7-8a83-47db-ae4c-9b03e888bad0',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_AD_TEST_USER_PRINCIPAL_NAME'] = 'testUserRandom3@rbactest.onmicrosoft.com';
  process.env['AZURE_AD_TEST_PASSWORD'] = 'Pa$$w0rd';
  process.env['AZURE_AD_TEST_GROUP_NAME'] = 'testgroupRandom3';
  process.env['AZURE_ARM_TEST_LOCATION'] = 'South Central US';
  process.env['AZURE_AD_TEST_SP_DISPLAY_NAME'] = 'mytestapprandom9234';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Authorization/roleDefinitions?api-version=2014-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"roleName\":\"API Management Service Contributor\",\"type\":\"BuiltInRole\",\"description\":\"Lets you manage API Management services, but not access to them.\",\"scope\":\"/\",\"permissions\":[{\"actions\":[\"Microsoft.ApiManagement/Services/*\",\"Microsoft.Authorization/*/read\",\"Microsoft.Resources/subscriptions/resources/read\",\"Microsoft.Resources/subscriptions/resourceGroups/read\",\"Microsoft.Resources/subscriptions/resourceGroups/resources/read\",\"Microsoft.Resources/subscriptions/resourceGroups/deployments/*\",\"Microsoft.Insights/alertRules/*\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Authorization/roleDefinitions/312a565d-c81f-4fd8-895a-4e21e48d571c\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"312a565d-c81f-4fd8-895a-4e21e48d571c\"},{\"properties\":{\"roleName\":\"Application Insights Component Contributor\",\"type\":\"BuiltInRole\",\"description\":\"Lets you manage Application Insights components, but not access to them.\",\"scope\":\"/\",\"permissions\":[{\"actions\":[\"Microsoft.Insights/components/*\",\"Microsoft.Insights/webtests/*\",\"Microsoft.Authorization/*/read\",\"Microsoft.Resources/subscriptions/resources/read\",\"Microsoft.Resources/subscriptions/resourceGroups/read\",\"Microsoft.Resources/subscriptions/resourceGroups/resources/read\",\"Microsoft.Resources/subscriptions/resourceGroups/deployments/*\",\"Microsoft.Insights/alertRules/*\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Authorization/roleDefinitions/ae349356-3a1b-4a5e-921d-050484c6347e\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"ae349356-3a1b-4a5e-921d-050484c6347e\"},{\"properties\":{\"roleName\":\"BizTalk Contributor\",\"type\":\"BuiltInRole\",\"description\":\"Lets you manage BizTalk services, but not access to them.\",\"scope\":\"/\",\"permissions\":[{\"actions\":[\"Microsoft.BizTalkServices/BizTalk/*\",\"Microsoft.Authorization/*/read\",\"Microsoft.Resources/subscriptions/resources/read\",\"Microsoft.Resources/subscriptions/resourceGroups/read\",\"Microsoft.Resources/subscriptions/resourceGroups/resources/read\",\"Microsoft.Resources/subscriptions/resourceGroups/deployments/*\",\"Microsoft.Insights/alertRules/*\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Authorization/roleDefinitions/5e3c6656-6cfa-4708-81fe-0de47ac73342\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"5e3c6656-6cfa-4708-81fe-0de47ac73342\"},{\"properties\":{\"roleName\":\"ClearDB MySQL DB Contributor\",\"type\":\"BuiltInRole\",\"description\":\"Lets you manage ClearDB MySQL databases, but not access to them.\",\"scope\":\"/\",\"permissions\":[{\"actions\":[\"successbricks.cleardb/databases/*\",\"Microsoft.Authorization/*/read\",\"Microsoft.Resources/subscriptions/resources/read\",\"Microsoft.Resources/subscriptions/resourceGroups/read\",\"Microsoft.Resources/subscriptions/resourceGroups/resources/read\",\"Microsoft.Resources/subscriptions/resourceGroups/deployments/*\",\"Microsoft.Insights/alertRules/*\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Authorization/roleDefinitions/9106cda0-8a86-4e81-b686-29a22c54effe\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"9106cda0-8a86-4e81-b686-29a22c54effe\"},{\"properties\":{\"roleName\":\"Contributor\",\"type\":\"BuiltInRole\",\"description\":\"Lets you manage everything except access to resources.\",\"scope\":\"/\",\"permissions\":[{\"actions\":[\"*\"],\"notActions\":[\"Microsoft.Authorization/*/Write\",\"Microsoft.Authorization/*/Delete\"]}]},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Authorization/roleDefinitions/b24988ac-6180-42a0-ab88-20f7382dd24c\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"b24988ac-6180-42a0-ab88-20f7382dd24c\"},{\"properties\":{\"roleName\":\"Data Factory Contributor\",\"type\":\"BuiltInRole\",\"description\":\"Lets you manage data factories, but not access to them.\",\"scope\":\"/\",\"permissions\":[{\"actions\":[\"Microsoft.DataFactory/dataFactories/*\",\"Microsoft.Authorization/*/read\",\"Microsoft.Resources/subscriptions/resources/read\",\"Microsoft.Resources/subscriptions/resourceGroups/read\",\"Microsoft.Resources/subscriptions/resourceGroups/resources/read\",\"Microsoft.Resources/subscriptions/resourceGroups/deployments/*\",\"Microsoft.Insights/alertRules/*\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Authorization/roleDefinitions/673868aa-7521-48a0-acc6-0f60742d39f5\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"673868aa-7521-48a0-acc6-0f60742d39f5\"},{\"properties\":{\"roleName\":\"DocumentDB Account Contributor\",\"type\":\"BuiltInRole\",\"description\":\"Lets you manage DocumentDB accounts, but not access to them.\",\"scope\":\"/\",\"permissions\":[{\"actions\":[\"Microsoft.DocumentDb/databaseAccounts/*\",\"Microsoft.Authorization/*/read\",\"Microsoft.Resources/subscriptions/resources/read\",\"Microsoft.Resources/subscriptions/resourceGroups/read\",\"Microsoft.Resources/subscriptions/resourceGroups/resources/read\",\"Microsoft.Resources/subscriptions/resourceGroups/deployments/*\",\"Microsoft.Insights/alertRules/*\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Authorization/roleDefinitions/5bd9cd88-fe45-4216-938b-f97437e15450\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"5bd9cd88-fe45-4216-938b-f97437e15450\"},{\"properties\":{\"roleName\":\"Intelligent Systems Account Contributor\",\"type\":\"BuiltInRole\",\"description\":\"Lets you manage Intelligent Systems accounts, but not access to them.\",\"scope\":\"/\",\"permissions\":[{\"actions\":[\"Microsoft.IntelligentSystems/accounts/*\",\"Microsoft.Authorization/*/read\",\"Microsoft.Resources/subscriptions/resources/read\",\"Microsoft.Resources/subscriptions/resourceGroups/read\",\"Microsoft.Resources/subscriptions/resourceGroups/resources/read\",\"Microsoft.Resources/subscriptions/resourceGroups/deployments/*\",\"Microsoft.Insights/alertRules/*\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Authorization/roleDefinitions/03a6d094-3444-4b3d-88af-7477090a9e5e\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"03a6d094-3444-4b3d-88af-7477090a9e5e\"},{\"properties\":{\"roleName\":\"New Relic APM Account Contributor\",\"type\":\"BuiltInRole\",\"description\":\"Lets you manage New Relic Application Performance Management accounts and applications, but not access to them.\",\"scope\":\"/\",\"permissions\":[{\"actions\":[\"NewRelic.APM/accounts/*\",\"Microsoft.Authorization/*/read\",\"Microsoft.Resources/subscriptions/resources/read\",\"Microsoft.Resources/subscriptions/resourceGroups/read\",\"Microsoft.Resources/subscriptions/resourceGroups/resources/read\",\"Microsoft.Resources/subscriptions/resourceGroups/deployments/*\",\"Microsoft.Insights/alertRules/*\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Authorization/roleDefinitions/5d28c62d-5b37-4476-8438-e587778df237\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"5d28c62d-5b37-4476-8438-e587778df237\"},{\"properties\":{\"roleName\":\"Owner\",\"type\":\"BuiltInRole\",\"description\":\"Lets you manage everything, including access to resources.\",\"scope\":\"/\",\"permissions\":[{\"actions\":[\"*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Authorization/roleDefinitions/8e3af657-a8ff-443c-a75c-2fe8c4bcb635\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"8e3af657-a8ff-443c-a75c-2fe8c4bcb635\"},{\"properties\":{\"roleName\":\"Reader\",\"type\":\"BuiltInRole\",\"description\":\"Lets you view everything, but not make any changes.\",\"scope\":\"/\",\"permissions\":[{\"actions\":[\"*/read\"],\"notActions\":[]}]},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Authorization/roleDefinitions/acdd72a7-3385-48ef-bd42-f606fba81ae7\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"acdd72a7-3385-48ef-bd42-f606fba81ae7\"},{\"properties\":{\"roleName\":\"Redis Cache Contributor\",\"type\":\"BuiltInRole\",\"description\":\"Lets you manage Redis caches, but not access to them.\",\"scope\":\"/\",\"permissions\":[{\"actions\":[\"Microsoft.Cache/redis/*\",\"Microsoft.Authorization/*/read\",\"Microsoft.Resources/subscriptions/resources/read\",\"Microsoft.Resources/subscriptions/resourceGroups/read\",\"Microsoft.Resources/subscriptions/resourceGroups/resources/read\",\"Microsoft.Resources/subscriptions/resourceGroups/deployments/*\",\"Microsoft.Insights/alertRules/*\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Authorization/roleDefinitions/e0f68234-74aa-48ed-b826-c38b57376e17\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"e0f68234-74aa-48ed-b826-c38b57376e17\"},{\"properties\":{\"roleName\":\"SQL DB Contributor\",\"type\":\"BuiltInRole\",\"description\":\"Lets you manage SQL databases, but not access to them. Also, you can’t manage their security-related policies or their parent SQL servers.\",\"scope\":\"/\",\"permissions\":[{\"actions\":[\"Microsoft.Sql/servers/read\",\"Microsoft.Sql/servers/databases/*\",\"Microsoft.Authorization/*/read\",\"Microsoft.Resources/subscriptions/resources/read\",\"Microsoft.Resources/subscriptions/resourceGroups/read\",\"Microsoft.Resources/subscriptions/resourceGroups/resources/read\",\"Microsoft.Resources/subscriptions/resourceGroups/deployments/*\",\"Microsoft.Insights/alertRules/*\",\"Microsoft.Support/*\"],\"notActions\":[\"Microsoft.Sql/servers/databases/auditingPolicies/*\",\"Microsoft.Sql/servers/databases/connectionPolicies/*\",\"Microsoft.Sql/servers/databases/dataMaskingPolicies/*\",\"Microsoft.Sql/servers/databases/securityMetrics/*\"]}]},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Authorization/roleDefinitions/9b7fa17d-e63e-47b0-bb0a-15c516ac86ec\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"9b7fa17d-e63e-47b0-bb0a-15c516ac86ec\"},{\"properties\":{\"roleName\":\"SQL Security Manager\",\"type\":\"BuiltInRole\",\"description\":\"Lets you manage the security-related policies of SQL servers and databases, but not access to them.\",\"scope\":\"/\",\"permissions\":[{\"actions\":[\"Microsoft.Sql/servers/read\",\"Microsoft.Sql/servers/auditingPolicies/*\",\"Microsoft.Sql/servers/databases/read\",\"Microsoft.Sql/servers/databases/auditingPolicies/*\",\"Microsoft.Sql/servers/databases/connectionPolicies/*\",\"Microsoft.Sql/servers/databases/dataMaskingPolicies/*\",\"Microsoft.Sql/servers/databases/securityMetrics/*\",\"Microsoft.Authorization/*/read\",\"Microsoft.Resources/subscriptions/resources/read\",\"Microsoft.Resources/subscriptions/resourceGroups/read\",\"Microsoft.Resources/subscriptions/resourceGroups/resources/read\",\"Microsoft.Resources/subscriptions/resourceGroups/deployments/*\",\"Microsoft.Insights/alertRules/*\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Authorization/roleDefinitions/056cd41c-7e88-42e1-933e-88ba6a50c9c3\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"056cd41c-7e88-42e1-933e-88ba6a50c9c3\"},{\"properties\":{\"roleName\":\"SQL Server Contributor\",\"type\":\"BuiltInRole\",\"description\":\"Lets you manage SQL servers and databases, but not access to them, and not their security -related policies.\",\"scope\":\"/\",\"permissions\":[{\"actions\":[\"Microsoft.Sql/servers/*\",\"Microsoft.Authorization/*/read\",\"Microsoft.Resources/subscriptions/resources/read\",\"Microsoft.Resources/subscriptions/resourceGroups/read\",\"Microsoft.Resources/subscriptions/resourceGroups/resources/read\",\"Microsoft.Resources/subscriptions/resourceGroups/deployments/*\",\"Microsoft.Insights/alertRules/*\",\"Microsoft.Support/*\"],\"notActions\":[\"Microsoft.Sql/servers/auditingPolicies/*\",\"Microsoft.Sql/servers/databases/auditingPolicies/*\",\"Microsoft.Sql/servers/databases/connectionPolicies/*\",\"Microsoft.Sql/servers/databases/dataMaskingPolicies/*\",\"Microsoft.Sql/servers/databases/securityMetrics/*\"]}]},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Authorization/roleDefinitions/6d8ee4ec-f05a-4a1d-8b00-a9b17e38b437\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"6d8ee4ec-f05a-4a1d-8b00-a9b17e38b437\"},{\"properties\":{\"roleName\":\"Scheduler Job Collections Contributor\",\"type\":\"BuiltInRole\",\"description\":\"Lets you manage Scheduler job collections, but not access to them.\",\"scope\":\"/\",\"permissions\":[{\"actions\":[\"Microsoft.Scheduler/jobcollections/*\",\"Microsoft.Authorization/*/read\",\"Microsoft.Resources/subscriptions/resources/read\",\"Microsoft.Resources/subscriptions/resourceGroups/read\",\"Microsoft.Resources/subscriptions/resourceGroups/resources/read\",\"Microsoft.Resources/subscriptions/resourceGroups/deployments/*\",\"Microsoft.Insights/alertRules/*\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Authorization/roleDefinitions/188a0f2f-5c9e-469b-ae67-2aa5ce574b94\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"188a0f2f-5c9e-469b-ae67-2aa5ce574b94\"},{\"properties\":{\"roleName\":\"Search Service Contributor\",\"type\":\"BuiltInRole\",\"description\":\"Lets you manage Search services, but not access to them.\",\"scope\":\"/\",\"permissions\":[{\"actions\":[\"Microsoft.Search/searchServices/*\",\"Microsoft.Authorization/*/read\",\"Microsoft.Resources/subscriptions/resources/read\",\"Microsoft.Resources/subscriptions/resourceGroups/read\",\"Microsoft.Resources/subscriptions/resourceGroups/resources/read\",\"Microsoft.Resources/subscriptions/resourceGroups/deployments/*\",\"Microsoft.Insights/alertRules/*\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Authorization/roleDefinitions/7ca78c08-252a-4471-8644-bb5ff32d4ba0\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"7ca78c08-252a-4471-8644-bb5ff32d4ba0\"},{\"properties\":{\"roleName\":\"Storage Account Contributor\",\"type\":\"BuiltInRole\",\"description\":\"Lets you manage storage accounts, but not access to them.\",\"scope\":\"/\",\"permissions\":[{\"actions\":[\"Microsoft.ClassicStorage/storageAccounts/*\",\"Microsoft.Authorization/*/read\",\"Microsoft.Resources/subscriptions/resources/read\",\"Microsoft.Resources/subscriptions/resourceGroups/read\",\"Microsoft.Resources/subscriptions/resourceGroups/resources/read\",\"Microsoft.Resources/subscriptions/resourceGroups/deployments/*\",\"Microsoft.Insights/alertRules/*\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Authorization/roleDefinitions/86e8f5dc-a6e9-4c67-9d15-de283e8eac25\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"86e8f5dc-a6e9-4c67-9d15-de283e8eac25\"},{\"properties\":{\"roleName\":\"User Access Administrator\",\"type\":\"BuiltInRole\",\"description\":\"Lets you manage user access to Azure resources.\",\"scope\":\"/\",\"permissions\":[{\"actions\":[\"*/read\",\"Microsoft.Authorization/*\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Authorization/roleDefinitions/18d7d88d-d35e-4fb5-a5c3-7773c20a72d9\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"18d7d88d-d35e-4fb5-a5c3-7773c20a72d9\"},{\"properties\":{\"roleName\":\"Virtual Machine Contributor\",\"type\":\"BuiltInRole\",\"description\":\"Lets you manage virtual machines, but not access to them, and not the virtual network or storage account they’re connected to.\",\"scope\":\"/\",\"permissions\":[{\"actions\":[\"Microsoft.ClassicStorage/storageAccounts/read\",\"Microsoft.ClassicStorage/storageAccounts/listKeys/action\",\"Microsoft.ClassicStorage/storageAccounts/disks/read\",\"Microsoft.ClassicStorage/storageAccounts/images/read\",\"Microsoft.ClassicNetwork/virtualNetworks/read\",\"Microsoft.ClassicNetwork/reservedIps/read\",\"Microsoft.ClassicNetwork/virtualNetworks/join/action\",\"Microsoft.ClassicNetwork/reservedIps/link/action\",\"Microsoft.ClassicCompute/domainNames/*\",\"Microsoft.ClassicCompute/virtualMachines/*\",\"Microsoft.Authorization/*/read\",\"Microsoft.Resources/subscriptions/resourceGroups/read\",\"Microsoft.Resources/subscriptions/resourceGroups/resources/read\",\"Microsoft.Resources/subscriptions/resourceGroups/deployments/*\",\"Microsoft.Insights/alertRules/*\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Authorization/roleDefinitions/d73bb868-a0df-4d4d-bd69-98a00b01fccb\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"d73bb868-a0df-4d4d-bd69-98a00b01fccb\"},{\"properties\":{\"roleName\":\"Virtual Network Contributor\",\"type\":\"BuiltInRole\",\"description\":\"Lets you manage virtual networks, but not access to them.\",\"scope\":\"/\",\"permissions\":[{\"actions\":[\"Microsoft.ClassicNetwork/virtualNetworks/*\",\"Microsoft.Authorization/*/read\",\"Microsoft.Resources/subscriptions/resources/read\",\"Microsoft.Resources/subscriptions/resourceGroups/read\",\"Microsoft.Resources/subscriptions/resourceGroups/resources/read\",\"Microsoft.Resources/subscriptions/resourceGroups/deployments/*\",\"Microsoft.Insights/alertRules/*\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Authorization/roleDefinitions/b34d265f-36f7-4a0d-a4d4-e158ca92e90f\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"b34d265f-36f7-4a0d-a4d4-e158ca92e90f\"},{\"properties\":{\"roleName\":\"Web Plan Contributor\",\"type\":\"BuiltInRole\",\"description\":\"Lets you manage the web plans for websites, but not access to them.\",\"scope\":\"/\",\"permissions\":[{\"actions\":[\"Microsoft.Web/serverFarms/*\",\"Microsoft.Authorization/*/read\",\"Microsoft.Resources/subscriptions/resources/read\",\"Microsoft.Resources/subscriptions/resourceGroups/read\",\"Microsoft.Resources/subscriptions/resourceGroups/resources/read\",\"Microsoft.Resources/subscriptions/resourceGroups/deployments/*\",\"Microsoft.Insights/alertRules/*\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Authorization/roleDefinitions/2cc479cb-7b4d-49a8-b449-8c00fd0f0a4b\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"2cc479cb-7b4d-49a8-b449-8c00fd0f0a4b\"},{\"properties\":{\"roleName\":\"Website Contributor\",\"type\":\"BuiltInRole\",\"description\":\"Lets you manage websites (not web plans), but not access to them.\",\"scope\":\"/\",\"permissions\":[{\"actions\":[\"Microsoft.Web/serverFarms/read\",\"Microsoft.Web/serverFarms/join/action\",\"Microsoft.Web/sites/*\",\"Microsoft.Web/certificates/*\",\"Microsoft.Authorization/*/read\",\"Microsoft.Resources/subscriptions/resources/read\",\"Microsoft.Resources/subscriptions/resourceGroups/read\",\"Microsoft.Resources/subscriptions/resourceGroups/resources/read\",\"Microsoft.Resources/subscriptions/resourceGroups/deployments/*\",\"Microsoft.Insights/alertRules/*\",\"Microsoft.Support/*\",\"Microsoft.Insights/components/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Authorization/roleDefinitions/de139f84-1756-47ae-9be6-808fbbe84772\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"de139f84-1756-47ae-9be6-808fbbe84772\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '19102',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'x-ms-request-id': 'westus:0dc4f9cc-9ba0-47b4-94a3-1cdd94165312',
  'x-ms-ratelimit-remaining-subscription-reads': '31992',
  'x-ms-correlation-request-id': 'e64349d5-2b5d-4ebc-8967-10e94855e62d',
  'x-ms-routing-request-id': 'WESTUS:20150417T210535Z:e64349d5-2b5d-4ebc-8967-10e94855e62d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 17 Apr 2015 21:05:35 GMT' });
 return result; }]];