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
  .reply(200, "{\"identity\":\"Microsoft.ASPNETStarterSite.0.2.2-preview\",\"publisher\":\"Microsoft\",\"publisherDisplayName\":\"Microsoft\",\"itemName\":\"ASPNETStarterSite\",\"itemDisplayName\":\"ASP.NET Starter Site\",\"version\":\"0.2.2-preview\",\"summary\":\"Get started with this ready-to-use ASP.NET website template including tab interface and login support. This can be further customized to build a website for a small business or a personal website\",\"longSummary\":\"Get started with this ready-to-use ASP.NET website template including tab interface and login support. This can be further customized to build a website for a small business or a personal website\",\"description\":\"<p>Get started with this ready-to-use ASP.NET website template including tab interface and login support. This can be further customized to build a website for a small business or a personal website.</p>\",\"resourceGroupName\":null,\"definitionTemplates\":{\"uiDefinitionFileUrl\":\"https://gallerystoreprodch.blob.core.windows.net/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/UIDefinition.json\",\"defaultDeploymentTemplateId\":\"website_NewHostingPlan-Default\",\"deploymentTemplateFileUrls\":{\"website_ExistingHostingPlan\":\"https://gallerystoreprodch.blob.core.windows.net/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_ExistingHostingPlan.json\",\"website_NewHostingPlan\":\"https://gallerystoreprodch.blob.core.windows.net/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_NewHostingPlan.json\",\"website_NewHostingPlan-Default\":\"https://gallerystoreprodch.blob.core.windows.net/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_NewHostingPlan-Default.json\",\"website_NewHostingPlan_BasicStandard\":\"https://gallerystoreprodch.blob.core.windows.net/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_NewHostingPlan_BasicStandard.json\"}},\"categoryIds\":[\"web\",\"starterSite\"],\"screenshotUrls\":[],\"links\":[{\"id\":\"0\",\"displayName\":\"About Microsoft\",\"uri\":\"http://www.microsoft.com/\"},{\"id\":\"1\",\"displayName\":\"Documentation\",\"uri\":\"http://www.microsoft.com/web/category/all\"}],\"iconFileUrls\":{\"small\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Small.png\",\"medium\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Medium.png\",\"large\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Large.png\",\"wide\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Wide.png\",\"hero\":null}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-content-type-options': 'nosniff',
  'x-xss-protection': '1; mode=block',
  'x-ms-version': '4.14.0.133 (a2a340b.150108-1230)',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'browserId=f71707f0345f45baa0398f3ab38105d7; domain=gallery.azure.com; path=/; secure; HttpOnly' ],
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Sat, 06 Jun 2015 00:41:13 GMT',
  'content-length': '2978' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup4134?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xDeploymentTestGroup4134' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-request-id': '3e73261a-d7a2-4a50-bcc0-1f78358699e2',
  'x-ms-correlation-request-id': '3e73261a-d7a2-4a50-bcc0-1f78358699e2',
  'x-ms-routing-request-id': 'WESTUS:20150606T004114Z:3e73261a-d7a2-4a50-bcc0-1f78358699e2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 06 Jun 2015 00:41:14 GMT',
  'content-length': '116' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup4134?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup4134\",\"name\":\"xDeploymentTestGroup4134\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '211',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1186',
  'x-ms-request-id': '287be75a-f465-4936-8989-904911d92919',
  'x-ms-correlation-request-id': '287be75a-f465-4936-8989-904911d92919',
  'x-ms-routing-request-id': 'WESTUS:20150606T004117Z:287be75a-f465-4936-8989-904911d92919',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 06 Jun 2015 00:41:17 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup4134?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDQxMzQtV0VTVFVTIiwiam9iTG9jYXRpb24iOiJ3ZXN0dXMifQ?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1188',
  'x-ms-request-id': '7c4377a7-7b38-40d5-bdfe-92e810a17266',
  'x-ms-correlation-request-id': '7c4377a7-7b38-40d5-bdfe-92e810a17266',
  'x-ms-routing-request-id': 'WESTUS:20150606T004119Z:7c4377a7-7b38-40d5-bdfe-92e810a17266',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 06 Jun 2015 00:41:18 GMT',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDQxMzQtV0VTVFVTIiwiam9iTG9jYXRpb24iOiJ3ZXN0dXMifQ?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDQxMzQtV0VTVFVTIiwiam9iTG9jYXRpb24iOiJ3ZXN0dXMifQ?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-request-id': '5bedfa88-9067-404c-8889-5ad29c062827',
  'x-ms-correlation-request-id': '5bedfa88-9067-404c-8889-5ad29c062827',
  'x-ms-routing-request-id': 'WESTUS:20150606T004134Z:5bedfa88-9067-404c-8889-5ad29c062827',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 06 Jun 2015 00:41:34 GMT',
  'content-length': '0' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xDeploymentTestSite11839','xDeploymentTestHost23805','xDeploymentTestGroup4134','Deploy166'];};