// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '5e7d1bb6-4953-44fe-8a54-43fbdb53b989',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Mobilytics Test1',
    registeredProviders: ['website', 'mobileservice'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestnode9673/authsettings')
  .reply(200, "[{\"provider\":\"google\",\"appId\":\"123\",\"secret\":\"456\"},{\"provider\":\"twitter\",\"appId\":\"123\",\"secret\":\"\"},{\"provider\":\"facebook\",\"appId\":\"123\",\"secret\":\"456\"}]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '154',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'a32b44709767beada366f282978e5d19',
  date: 'Mon, 29 Jun 2015 22:08:22 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestnode9673/authsettings', '*')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  expires: '-1',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '893e7f2717d5b8e29b661a8e7b3e12d3',
  date: 'Mon, 29 Jun 2015 22:08:25 GMT' });
 return result; }]];