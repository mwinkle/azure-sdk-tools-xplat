// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '38b598fc-e57a-423f-b2e7-dc0ddb631f1f',
    name: 'Visual Studio Ultimate with MSDN',
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
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://gallery.azure.com:443')
  .get('/Microsoft.Gallery/galleryitems/Microsoft.ASPNETStarterSite.0.2.2-preview')
  .reply(200, "{\"identity\":\"Microsoft.ASPNETStarterSite.0.2.2-preview\",\"publisher\":\"Microsoft\",\"publisherDisplayName\":\"Microsoft\",\"itemName\":\"ASPNETStarterSite\",\"itemDisplayName\":\"ASP.NET Starter Site\",\"version\":\"0.2.2-preview\",\"summary\":\"Get started with this ready-to-use ASP.NET website template including tab interface and login support. This can be further customized to build a website for a small business or a personal website\",\"longSummary\":\"Get started with this ready-to-use ASP.NET website template including tab interface and login support. This can be further customized to build a website for a small business or a personal website\",\"description\":\"<p>Get started with this ready-to-use ASP.NET website template including tab interface and login support. This can be further customized to build a website for a small business or a personal website.</p>\",\"resourceGroupName\":null,\"definitionTemplates\":{\"uiDefinitionFileUrl\":\"https://gallery.azure.com/artifact/20140901/Microsoft.ASPNETStarterSite.0.2.2-preview/UIDefinition.json\",\"defaultDeploymentTemplateId\":\"website_NewHostingPlan-Default\",\"deploymentTemplateFileUrls\":{\"website_ExistingHostingPlan\":\"https://gallery.azure.com/artifact/20140901/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_ExistingHostingPlan.json\",\"website_NewHostingPlan\":\"https://gallery.azure.com/artifact/20140901/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_NewHostingPlan.json\",\"website_NewHostingPlan-Default\":\"https://gallery.azure.com/artifact/20140901/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_NewHostingPlan-Default.json\",\"website_NewHostingPlan_BasicStandard\":\"https://gallery.azure.com/artifact/20140901/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_NewHostingPlan_BasicStandard.json\"}},\"categoryIds\":[\"web\",\"starterSite\"],\"screenshotUrls\":[],\"links\":[{\"id\":\"0\",\"displayName\":\"About Microsoft\",\"uri\":\"http://www.microsoft.com/\"},{\"id\":\"1\",\"displayName\":\"Documentation\",\"uri\":\"http://www.microsoft.com/web/category/all\"}],\"iconFileUrls\":{\"small\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Small.png\",\"medium\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Medium.png\",\"large\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Large.png\",\"wide\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Wide.png\",\"hero\":null}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-content-type-options': 'nosniff',
  'x-xss-protection': '1; mode=block',
  'x-ms-version': '4.14.0.133 (a2a340b.150108-1230)',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'browserId=e1fcc13a83fe4406bd3fe6290f5cd3e5; domain=gallery.azure.com; path=/; secure; HttpOnly' ],
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Wed, 12 Aug 2015 20:26:07 GMT',
  'content-length': '2773' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xplatTestGCreate3168?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGCreate3168' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-request-id': 'e43b3e90-cf94-45f3-9154-cacbd02c586b',
  'x-ms-correlation-request-id': 'e43b3e90-cf94-45f3-9154-cacbd02c586b',
  'x-ms-routing-request-id': 'SOUTHCENTRALUS:20150812T202610Z:e43b3e90-cf94-45f3-9154-cacbd02c586b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 12 Aug 2015 20:26:09 GMT',
  'content-length': '112' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xplatTestGCreate3168?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xplatTestGCreate3168\",\"name\":\"xplatTestGCreate3168\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '203',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-request-id': 'e6337065-b70e-47c3-8424-d877ee531bc5',
  'x-ms-correlation-request-id': 'e6337065-b70e-47c3-8424-d877ee531bc5',
  'x-ms-routing-request-id': 'SOUTHCENTRALUS:20150812T202612Z:e6337065-b70e-47c3-8424-d877ee531bc5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 12 Aug 2015 20:26:11 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://gallery.azure.com:443')
  .get('/Microsoft.Gallery/galleryitems/Microsoft.ASPNETStarterSite.0.2.2-preview')
  .reply(200, "{\"identity\":\"Microsoft.ASPNETStarterSite.0.2.2-preview\",\"publisher\":\"Microsoft\",\"publisherDisplayName\":\"Microsoft\",\"itemName\":\"ASPNETStarterSite\",\"itemDisplayName\":\"ASP.NET Starter Site\",\"version\":\"0.2.2-preview\",\"summary\":\"Get started with this ready-to-use ASP.NET website template including tab interface and login support. This can be further customized to build a website for a small business or a personal website\",\"longSummary\":\"Get started with this ready-to-use ASP.NET website template including tab interface and login support. This can be further customized to build a website for a small business or a personal website\",\"description\":\"<p>Get started with this ready-to-use ASP.NET website template including tab interface and login support. This can be further customized to build a website for a small business or a personal website.</p>\",\"resourceGroupName\":null,\"definitionTemplates\":{\"uiDefinitionFileUrl\":\"https://gallery.azure.com/artifact/20140901/Microsoft.ASPNETStarterSite.0.2.2-preview/UIDefinition.json\",\"defaultDeploymentTemplateId\":\"website_NewHostingPlan-Default\",\"deploymentTemplateFileUrls\":{\"website_ExistingHostingPlan\":\"https://gallery.azure.com/artifact/20140901/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_ExistingHostingPlan.json\",\"website_NewHostingPlan\":\"https://gallery.azure.com/artifact/20140901/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_NewHostingPlan.json\",\"website_NewHostingPlan-Default\":\"https://gallery.azure.com/artifact/20140901/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_NewHostingPlan-Default.json\",\"website_NewHostingPlan_BasicStandard\":\"https://gallery.azure.com/artifact/20140901/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_NewHostingPlan_BasicStandard.json\"}},\"categoryIds\":[\"web\",\"starterSite\"],\"screenshotUrls\":[],\"links\":[{\"id\":\"0\",\"displayName\":\"About Microsoft\",\"uri\":\"http://www.microsoft.com/\"},{\"id\":\"1\",\"displayName\":\"Documentation\",\"uri\":\"http://www.microsoft.com/web/category/all\"}],\"iconFileUrls\":{\"small\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Small.png\",\"medium\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Medium.png\",\"large\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Large.png\",\"wide\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Wide.png\",\"hero\":null}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-content-type-options': 'nosniff',
  'x-xss-protection': '1; mode=block',
  'x-ms-version': '4.14.0.133 (a2a340b.150108-1230)',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'browserId=40e4d844782044c7937451c16737656e; domain=gallery.azure.com; path=/; secure; HttpOnly' ],
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Wed, 12 Aug 2015 20:26:12 GMT',
  'content-length': '2773' });
 return result; },
function (nock) { 
var result = 
nock('https://gallery.azure.com:443')
  .get('/artifact/20140901/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_NewHostingPlan-Default.json')
  .reply(200, "{\r\n  \"$schema\": \"http://schema.management.azure.com/schemas/2014-04-01-preview/deploymentTemplate.json#\",\r\n  \"contentVersion\": \"1.0.0.0\",\r\n  \"parameters\": {\r\n    \"siteName\": {\r\n      \"type\": \"string\"\r\n    },\r\n    \"hostingPlanName\": {\r\n      \"type\": \"string\"\r\n    },\r\n    \"siteLocation\": {\r\n      \"type\": \"string\"\r\n    },\r\n    \"sku\": {\r\n      \"type\": \"string\",\r\n      \"allowedValues\": [\r\n        \"Free\",\r\n        \"Shared\",\r\n        \"Basic\",\r\n        \"Standard\"\r\n      ],\r\n      \"defaultValue\": \"Free\"\r\n    },\r\n    \"workerSize\": {\r\n      \"type\": \"string\",\r\n      \"allowedValues\": [\r\n        \"0\",\r\n        \"1\",\r\n        \"2\"\r\n      ],\r\n      \"defaultValue\": \"0\"\r\n    }\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"apiVersion\": \"2014-04-01\",\r\n      \"name\": \"[parameters('hostingPlanName')]\",\r\n      \"type\": \"Microsoft.Web/serverfarms\",\r\n      \"location\": \"[parameters('siteLocation')]\",\r\n      \"properties\": {\r\n        \"name\": \"[parameters('hostingPlanName')]\",\r\n        \"sku\": \"[parameters('sku')]\",\r\n        \"workerSize\": \"[parameters('workerSize')]\",\r\n        \"numberOfWorkers\": 1\r\n      }\r\n    },\r\n    {\r\n      \"apiVersion\": \"2014-04-01\",\r\n      \"name\": \"[parameters('siteName')]\",\r\n      \"type\": \"Microsoft.Web/sites\",\r\n      \"location\": \"[parameters('siteLocation')]\",\r\n      \"tags\": {\r\n        \"[concat('hidden-related:', resourceGroup().id, '/providers/Microsoft.Web/serverfarms/', parameters('hostingPlanName'))]\": \"Resource\"\r\n      },\r\n      \"dependsOn\": [\r\n        \"[concat('Microsoft.Web/serverfarms/', parameters('hostingPlanName'))]\"\r\n      ],\r\n      \"properties\": {\r\n        \"name\": \"[parameters('siteName')]\",\r\n        \"serverFarm\": \"[parameters('hostingPlanName')]\"\r\n      },\r\n      \"resources\": [\r\n        {\r\n          \"apiVersion\": \"2014-04-01\",\r\n          \"name\": \"MSDeploy\",\r\n          \"type\": \"Extensions\",\r\n          \"dependsOn\": [\r\n            \"[concat('Microsoft.Web/Sites/', parameters('siteName'))]\"\r\n          ],\r\n          \"properties\": {\r\n            \"packageUri\": \"https://auxmktplceprod.blob.core.windows.net/packages/StarterSite-modified.zip\",\r\n            \"dbType\": \"None\",\r\n            \"connectionString\": \"\",\r\n            \"setParameters\": {\r\n              \"Application Path\": \"[parameters('siteName')]\"\r\n            }\r\n          }\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      \"apiVersion\": \"2014-04\",\r\n      \"name\": \"[concat(parameters('hostingPlanName'), '-', resourceGroup().name)]\",\r\n      \"type\": \"microsoft.insights/autoscalesettings\",\r\n      \"location\": \"East US\",\r\n      \"tags\": {\r\n        \"[concat('hidden-link:', resourceGroup().id, '/providers/Microsoft.Web/serverfarms/', parameters('hostingPlanName'))]\": \"Resource\"\r\n      },\r\n      \"dependsOn\": [\r\n        \"[concat('Microsoft.Web/serverfarms/', parameters('hostingPlanName'))]\"\r\n      ],\r\n      \"properties\": {\r\n        \"profiles\": [\r\n          {\r\n            \"name\": \"Default\",\r\n            \"capacity\": {\r\n              \"minimum\": \"1\",\r\n              \"maximum\": \"2\",\r\n              \"default\": \"1\"\r\n            },\r\n            \"rules\": [\r\n              {\r\n                \"metricTrigger\": {\r\n                  \"metricName\": \"CpuPercentage\",\r\n                  \"metricResourceUri\": \"[concat(resourceGroup().id, '/providers/Microsoft.Web/serverfarms/', parameters('hostingPlanName'))]\",\r\n                  \"timeGrain\": \"PT1M\",\r\n                  \"statistic\": \"Average\",\r\n                  \"timeWindow\": \"PT10M\",\r\n                  \"timeAggregation\": \"Average\",\r\n                  \"operator\": \"GreaterThan\",\r\n                  \"threshold\": 80.0\r\n                },\r\n                \"scaleAction\": {\r\n                  \"direction\": \"Increase\",\r\n                  \"type\": \"ChangeCount\",\r\n                  \"value\": \"1\",\r\n                  \"cooldown\": \"PT10M\"\r\n                }\r\n              },\r\n              {\r\n                \"metricTrigger\": {\r\n                  \"metricName\": \"CpuPercentage\",\r\n                  \"metricResourceUri\": \"[concat(resourceGroup().id, '/providers/Microsoft.Web/serverfarms/', parameters('hostingPlanName'))]\",\r\n                  \"timeGrain\": \"PT1M\",\r\n                  \"statistic\": \"Average\",\r\n                  \"timeWindow\": \"PT1H\",\r\n                  \"timeAggregation\": \"Average\",\r\n                  \"operator\": \"LessThan\",\r\n                  \"threshold\": 60.0\r\n                },\r\n                \"scaleAction\": {\r\n                  \"direction\": \"Decrease\",\r\n                  \"type\": \"ChangeCount\",\r\n                  \"value\": \"1\",\r\n                  \"cooldown\": \"PT1H\"\r\n                }\r\n              }\r\n            ]\r\n          }\r\n        ],\r\n        \"enabled\": false,\r\n        \"name\": \"[concat(parameters('hostingPlanName'), '-', resourceGroup().name)]\",\r\n        \"targetResourceUri\": \"[concat(resourceGroup().id, '/providers/Microsoft.Web/serverfarms/', parameters('hostingPlanName'))]\"\r\n      }\r\n    },\r\n    {\r\n      \"apiVersion\": \"2014-04\",\r\n      \"name\": \"[concat('ServerErrors ', parameters('siteName'))]\",\r\n      \"type\": \"microsoft.insights/alertrules\",\r\n      \"location\": \"East US\",\r\n      \"tags\": {\r\n        \"[concat('hidden-link:', resourceGroup().id, '/providers/Microsoft.Web/sites/', parameters('siteName'))]\": \"Resource\"\r\n      },\r\n      \"dependsOn\": [\r\n        \"[concat('Microsoft.Web/sites/', parameters('siteName'))]\"\r\n      ],\r\n      \"properties\": {\r\n        \"name\": \"[concat('ServerErrors ', parameters('siteName'))]\",\r\n        \"description\": \"[concat(parameters('siteName'), ' has some server errors, status code 5xx.')]\",\r\n        \"isEnabled\": false,\r\n        \"condition\": {\r\n          \"odata.type\": \"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.ThresholdRuleCondition\",\r\n          \"dataSource\": {\r\n            \"odata.type\": \"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleMetricDataSource\",\r\n            \"resourceUri\": \"[concat(resourceGroup().id, '/providers/Microsoft.Web/sites/', parameters('siteName'))]\",\r\n            \"metricName\": \"Http5xx\"\r\n          },\r\n          \"operator\": \"GreaterThan\",\r\n          \"threshold\": 0.0,\r\n          \"windowSize\": \"PT5M\"\r\n        },\r\n        \"action\": {\r\n          \"odata.type\": \"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleEmailAction\",\r\n          \"sendToServiceOwners\": true,\r\n          \"customEmails\": []\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"apiVersion\": \"2014-04\",\r\n      \"name\": \"[concat('ForbiddenRequests ', parameters('siteName'))]\",\r\n      \"type\": \"microsoft.insights/alertrules\",\r\n      \"location\": \"East US\",\r\n      \"tags\": {\r\n        \"[concat('hidden-link:', resourceGroup().id, '/providers/Microsoft.Web/sites/', parameters('siteName'))]\": \"Resource\"\r\n      },\r\n      \"dependsOn\": [\r\n        \"[concat('Microsoft.Web/sites/', parameters('siteName'))]\"\r\n      ],\r\n      \"properties\": {\r\n        \"name\": \"[concat('ForbiddenRequests ', parameters('siteName'))]\",\r\n        \"description\": \"[concat(parameters('siteName'), ' has some requests that are forbidden, status code 403.')]\",\r\n        \"isEnabled\": false,\r\n        \"condition\": {\r\n          \"odata.type\": \"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.ThresholdRuleCondition\",\r\n          \"dataSource\": {\r\n            \"odata.type\": \"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleMetricDataSource\",\r\n            \"resourceUri\": \"[concat(resourceGroup().id, '/providers/Microsoft.Web/sites/', parameters('siteName'))]\",\r\n            \"metricName\": \"Http403\"\r\n          },\r\n          \"operator\": \"GreaterThan\",\r\n          \"threshold\": 0,\r\n          \"windowSize\": \"PT5M\"\r\n        },\r\n        \"action\": {\r\n          \"odata.type\": \"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleEmailAction\",\r\n          \"sendToServiceOwners\": true,\r\n          \"customEmails\": []\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"apiVersion\": \"2014-04\",\r\n      \"name\": \"[concat('CPUHigh ', parameters('hostingPlanName'))]\",\r\n      \"type\": \"microsoft.insights/alertrules\",\r\n      \"location\": \"East US\",\r\n      \"tags\": {\r\n        \"[concat('hidden-link:', resourceGroup().id, '/providers/Microsoft.Web/serverfarms/', parameters('hostingPlanName'))]\": \"Resource\"\r\n      },\r\n      \"dependsOn\": [\r\n        \"[concat('Microsoft.Web/serverfarms/', parameters('hostingPlanName'))]\"\r\n      ],\r\n      \"properties\": {\r\n        \"name\": \"[concat('CPUHigh ', parameters('hostingPlanName'))]\",\r\n        \"description\": \"[concat('The average CPU is high across all the instances of ', parameters('hostingPlanName'))]\",\r\n        \"isEnabled\": false,\r\n        \"condition\": {\r\n          \"odata.type\": \"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.ThresholdRuleCondition\",\r\n          \"dataSource\": {\r\n            \"odata.type\": \"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleMetricDataSource\",\r\n            \"resourceUri\": \"[concat(resourceGroup().id, '/providers/Microsoft.Web/serverfarms/', parameters('hostingPlanName'))]\",\r\n            \"metricName\": \"CpuPercentage\"\r\n          },\r\n          \"operator\": \"GreaterThan\",\r\n          \"threshold\": 90,\r\n          \"windowSize\": \"PT15M\"\r\n        },\r\n        \"action\": {\r\n          \"odata.type\": \"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleEmailAction\",\r\n          \"sendToServiceOwners\": true,\r\n          \"customEmails\": []\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"apiVersion\": \"2014-04\",\r\n      \"name\": \"[concat('LongHttpQueue ', parameters('hostingPlanName'))]\",\r\n      \"type\": \"microsoft.insights/alertrules\",\r\n      \"location\": \"East US\",\r\n      \"tags\": {\r\n        \"[concat('hidden-link:', resourceGroup().id, '/providers/Microsoft.Web/serverfarms/', parameters('hostingPlanName'))]\": \"Resource\"\r\n      },\r\n      \"dependsOn\": [\r\n        \"[concat('Microsoft.Web/serverfarms/', parameters('hostingPlanName'))]\"\r\n      ],\r\n      \"properties\": {\r\n        \"name\": \"[concat('LongHttpQueue ', parameters('hostingPlanName'))]\",\r\n        \"description\": \"[concat('The HTTP queue for the instances of ', parameters('hostingPlanName'), ' has a large number of pending requests.')]\",\r\n        \"isEnabled\": false,\r\n        \"condition\": {\r\n          \"odata.type\": \"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.ThresholdRuleCondition\",\r\n          \"dataSource\": {\r\n            \"odata.type\": \"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleMetricDataSource\",\r\n            \"resourceUri\": \"[concat(resourceGroup().id, '/providers/Microsoft.Web/serverfarms/', parameters('hostingPlanName'))]\",\r\n            \"metricName\": \"HttpQueueLength\"\r\n          },\r\n          \"operator\": \"GreaterThan\",\r\n          \"threshold\": 100.0,\r\n          \"windowSize\": \"PT5M\"\r\n        },\r\n        \"action\": {\r\n          \"odata.type\": \"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleEmailAction\",\r\n          \"sendToServiceOwners\": true,\r\n          \"customEmails\": []\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"apiVersion\": \"2014-04\",\r\n      \"name\": \"[parameters('siteName')]\",\r\n      \"type\": \"microsoft.insights/components\",\r\n      \"location\": \"Central US\",\r\n      \"tags\": {\r\n        \"[concat('hidden-link:', resourceGroup().id, '/providers/Microsoft.Web/sites/', parameters('siteName'))]\": \"Resource\"\r\n      },\r\n      \"dependsOn\": [\r\n        \"[concat('Microsoft.Web/sites/', parameters('siteName'))]\"\r\n      ],\r\n      \"properties\": {\r\n        \"applicationId\": \"[parameters('siteName')]\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-content-type-options': 'nosniff',
  'x-xss-protection': '1; mode=block',
  'x-ms-version': '4.14.0.133 (a2a340b.150108-1230)',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'browserId=11afd2a818704e15b215ffc1c6dfc4c5; domain=gallery.azure.com; path=/; secure; HttpOnly' ],
  'access-control-allow-origin': '*',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Wed, 12 Aug 2015 20:26:12 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xplatTestGCreate3168/providers/microsoft.resources/deployments/fakedDeploymentName/validate?api-version=2014-04-01-preview', '*')
  .reply(200, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xplatTestGCreate3168/deployments/fakedDeploymentName\",\"name\":\"fakedDeploymentName\",\"properties\":{\"parameters\":{\"siteName\":{\"type\":\"String\",\"value\":\"xDeploymentTestSite18896\"},\"hostingPlanName\":{\"type\":\"String\",\"value\":\"xDeploymentTestHost29054\"},\"siteLocation\":{\"type\":\"String\",\"value\":\"West US\"},\"sku\":{\"type\":\"String\",\"value\":\"Free\"},\"workerSize\":{\"type\":\"String\",\"value\":\"0\"}},\"mode\":\"Incremental\",\"provisioningState\":\"Accepted\",\"timestamp\":\"2015-08-12T20:26:14.3676057Z\",\"duration\":\"PT0S\",\"correlationId\":\"5f7676f6-d675-49fa-94c9-ca0817e8004b\",\"providers\":[{\"namespace\":\"Microsoft.Web\",\"resourceTypes\":[{\"resourceType\":\"serverfarms\",\"locations\":[\"westus\"]},{\"resourceType\":\"sites\",\"locations\":[\"westus\"]},{\"resourceType\":\"sites/Extensions\",\"locations\":[null]}]},{\"namespace\":\"microsoft.insights\",\"resourceTypes\":[{\"resourceType\":\"autoscalesettings\",\"locations\":[\"eastus\"]},{\"resourceType\":\"alertrules\",\"locations\":[\"eastus\"]},{\"resourceType\":\"components\",\"locations\":[\"centralus\"]}]}],\"dependencies\":[{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xplatTestGCreate3168/providers/Microsoft.Web/serverfarms/xDeploymentTestHost29054\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost29054\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xplatTestGCreate3168/providers/Microsoft.Web/sites/xDeploymentTestSite18896\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite18896\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xplatTestGCreate3168/providers/Microsoft.Web/Sites/xDeploymentTestSite18896\",\"resourceType\":\"Microsoft.Web/Sites\",\"resourceName\":\"xDeploymentTestSite18896\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xplatTestGCreate3168/providers/Microsoft.Web/sites/xDeploymentTestSite18896/Extensions/MSDeploy\",\"resourceType\":\"Microsoft.Web/sites/Extensions\",\"resourceName\":\"xDeploymentTestSite18896/MSDeploy\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xplatTestGCreate3168/providers/Microsoft.Web/serverfarms/xDeploymentTestHost29054\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost29054\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xplatTestGCreate3168/providers/microsoft.insights/autoscalesettings/xDeploymentTestHost29054-xplatTestGCreate3168\",\"resourceType\":\"microsoft.insights/autoscalesettings\",\"resourceName\":\"xDeploymentTestHost29054-xplatTestGCreate3168\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xplatTestGCreate3168/providers/Microsoft.Web/sites/xDeploymentTestSite18896\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite18896\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xplatTestGCreate3168/providers/microsoft.insights/alertrules/ServerErrors xDeploymentTestSite18896\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"ServerErrors xDeploymentTestSite18896\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xplatTestGCreate3168/providers/Microsoft.Web/sites/xDeploymentTestSite18896\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite18896\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xplatTestGCreate3168/providers/microsoft.insights/alertrules/ForbiddenRequests xDeploymentTestSite18896\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"ForbiddenRequests xDeploymentTestSite18896\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xplatTestGCreate3168/providers/Microsoft.Web/serverfarms/xDeploymentTestHost29054\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost29054\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xplatTestGCreate3168/providers/microsoft.insights/alertrules/CPUHigh xDeploymentTestHost29054\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"CPUHigh xDeploymentTestHost29054\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xplatTestGCreate3168/providers/Microsoft.Web/serverfarms/xDeploymentTestHost29054\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost29054\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xplatTestGCreate3168/providers/microsoft.insights/alertrules/LongHttpQueue xDeploymentTestHost29054\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"LongHttpQueue xDeploymentTestHost29054\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xplatTestGCreate3168/providers/Microsoft.Web/sites/xDeploymentTestSite18896\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite18896\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xplatTestGCreate3168/providers/microsoft.insights/components/xDeploymentTestSite18896\",\"resourceType\":\"microsoft.insights/components\",\"resourceName\":\"xDeploymentTestSite18896\"}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1192',
  'x-ms-request-id': '5f7676f6-d675-49fa-94c9-ca0817e8004b',
  'x-ms-correlation-request-id': '5f7676f6-d675-49fa-94c9-ca0817e8004b',
  'x-ms-routing-request-id': 'SOUTHCENTRALUS:20150812T202614Z:5f7676f6-d675-49fa-94c9-ca0817e8004b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 12 Aug 2015 20:26:14 GMT',
  'content-length': '5259' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xplatTestGCreate3168?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFRFU1RHQ1JFQVRFMzE2OC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1191',
  'x-ms-request-id': '8c6e7b27-ce19-4d7a-bcb1-411f3ffa1f4d',
  'x-ms-correlation-request-id': '8c6e7b27-ce19-4d7a-bcb1-411f3ffa1f4d',
  'x-ms-routing-request-id': 'SOUTHCENTRALUS:20150812T202616Z:8c6e7b27-ce19-4d7a-bcb1-411f3ffa1f4d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 12 Aug 2015 20:26:15 GMT',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFRFU1RHQ1JFQVRFMzE2OC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFRFU1RHQ1JFQVRFMzE2OC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-request-id': '662766d8-3aec-4f12-885e-13a402ed5613',
  'x-ms-correlation-request-id': '662766d8-3aec-4f12-885e-13a402ed5613',
  'x-ms-routing-request-id': 'SOUTHCENTRALUS:20150812T202631Z:662766d8-3aec-4f12-885e-13a402ed5613',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 12 Aug 2015 20:26:30 GMT',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFRFU1RHQ1JFQVRFMzE2OC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFRFU1RHQ1JFQVRFMzE2OC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-request-id': 'bb2d4fd9-6c0e-4d35-a229-c4a68aa692c4',
  'x-ms-correlation-request-id': 'bb2d4fd9-6c0e-4d35-a229-c4a68aa692c4',
  'x-ms-routing-request-id': 'SOUTHCENTRALUS:20150812T202646Z:bb2d4fd9-6c0e-4d35-a229-c4a68aa692c4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 12 Aug 2015 20:26:46 GMT',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFRFU1RHQ1JFQVRFMzE2OC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-request-id': '5b208926-02ea-4147-98fd-1e6a8b9e8311',
  'x-ms-correlation-request-id': '5b208926-02ea-4147-98fd-1e6a8b9e8311',
  'x-ms-routing-request-id': 'SOUTHCENTRALUS:20150812T202703Z:5b208926-02ea-4147-98fd-1e6a8b9e8311',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 12 Aug 2015 20:27:03 GMT',
  'content-length': '0' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xplatTestGCreate3168'];};