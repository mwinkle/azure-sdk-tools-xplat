// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    registeredProviders: ['website'],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/appgwprodnext/ApplicationGateways/CliTestAppGate/configuration?api-version=1.0')
  .reply(200, "<ApplicationGatewayConfiguration xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><FrontendIPConfigurations><FrontendIPConfiguration><Name>fipConfig</Name><Type>Private</Type><StaticIPAddress>10.0.0.10</StaticIPAddress></FrontendIPConfiguration></FrontendIPConfigurations><FrontendPorts><FrontendPort><Name>fep1</Name><Port>80</Port></FrontendPort><FrontendPort><Name>frontEndPort</Name><Port>80</Port></FrontendPort></FrontendPorts><BackendAddressPools><BackendAddressPool><Name>pool1</Name><IPAddresses><IPAddress>10.0.0.1</IPAddress></IPAddresses></BackendAddressPool><BackendAddressPool><Name>MyPool</Name><IPAddresses><IPAddress>10.0.0.2</IPAddress></IPAddresses></BackendAddressPool><BackendAddressPool><Name>clitestaddpool</Name><IPAddresses><IPAddress>10.0.0.10</IPAddress></IPAddresses></BackendAddressPool></BackendAddressPools><BackendHttpSettingsList><BackendHttpSettings><Name>setting1</Name><Port>80</Port><Protocol>Http</Protocol><CookieBasedAffinity>Enabled</CookieBasedAffinity></BackendHttpSettings><BackendHttpSettings><Name>MySettings</Name><Port>81</Port><Protocol>Http</Protocol><CookieBasedAffinity>Enabled</CookieBasedAffinity></BackendHttpSettings><BackendHttpSettings><Name>settings2</Name><Port>888</Port><Protocol>Http</Protocol><CookieBasedAffinity>Disabled</CookieBasedAffinity></BackendHttpSettings><BackendHttpSettings><Name>settings3</Name><Port>999</Port><Protocol>Http</Protocol><CookieBasedAffinity>Disabled</CookieBasedAffinity></BackendHttpSettings><BackendHttpSettings><Name>httpSetting</Name><Port>80</Port><Protocol>Http</Protocol><CookieBasedAffinity>Disabled</CookieBasedAffinity></BackendHttpSettings></BackendHttpSettingsList><HttpListeners><HttpListener><Name>listener1</Name><FrontendPort>fep1</FrontendPort><Protocol>Http</Protocol></HttpListener></HttpListeners><HttpLoadBalancingRules><HttpLoadBalancingRule><Name>rule1</Name><Type>Basic</Type><BackendHttpSettings>setting1</BackendHttpSettings><Listener>listener1</Listener><BackendAddressPool>pool1</BackendAddressPool></HttpLoadBalancingRule></HttpLoadBalancingRules></ApplicationGatewayConfiguration>", { 'cache-control': 'no-cache',
  'content-length': '2157',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.240 (rd_rdfe_stable.150608-1900) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': 'b8b40fb4d932b736b6cc3bf6b1bb87ac',
  date: 'Wed, 17 Jun 2015 08:42:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/appgwprodnext/ApplicationGateways/CliTestAppGate/configuration?api-version=1.0')
  .reply(200, "<ApplicationGatewayConfiguration xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><FrontendIPConfigurations><FrontendIPConfiguration><Name>fipConfig</Name><Type>Private</Type><StaticIPAddress>10.0.0.10</StaticIPAddress></FrontendIPConfiguration></FrontendIPConfigurations><FrontendPorts><FrontendPort><Name>fep1</Name><Port>80</Port></FrontendPort><FrontendPort><Name>frontEndPort</Name><Port>80</Port></FrontendPort></FrontendPorts><BackendAddressPools><BackendAddressPool><Name>pool1</Name><IPAddresses><IPAddress>10.0.0.1</IPAddress></IPAddresses></BackendAddressPool><BackendAddressPool><Name>MyPool</Name><IPAddresses><IPAddress>10.0.0.2</IPAddress></IPAddresses></BackendAddressPool><BackendAddressPool><Name>clitestaddpool</Name><IPAddresses><IPAddress>10.0.0.10</IPAddress></IPAddresses></BackendAddressPool></BackendAddressPools><BackendHttpSettingsList><BackendHttpSettings><Name>setting1</Name><Port>80</Port><Protocol>Http</Protocol><CookieBasedAffinity>Enabled</CookieBasedAffinity></BackendHttpSettings><BackendHttpSettings><Name>MySettings</Name><Port>81</Port><Protocol>Http</Protocol><CookieBasedAffinity>Enabled</CookieBasedAffinity></BackendHttpSettings><BackendHttpSettings><Name>settings2</Name><Port>888</Port><Protocol>Http</Protocol><CookieBasedAffinity>Disabled</CookieBasedAffinity></BackendHttpSettings><BackendHttpSettings><Name>settings3</Name><Port>999</Port><Protocol>Http</Protocol><CookieBasedAffinity>Disabled</CookieBasedAffinity></BackendHttpSettings><BackendHttpSettings><Name>httpSetting</Name><Port>80</Port><Protocol>Http</Protocol><CookieBasedAffinity>Disabled</CookieBasedAffinity></BackendHttpSettings></BackendHttpSettingsList><HttpListeners><HttpListener><Name>listener1</Name><FrontendPort>fep1</FrontendPort><Protocol>Http</Protocol></HttpListener></HttpListeners><HttpLoadBalancingRules><HttpLoadBalancingRule><Name>rule1</Name><Type>Basic</Type><BackendHttpSettings>setting1</BackendHttpSettings><Listener>listener1</Listener><BackendAddressPool>pool1</BackendAddressPool></HttpLoadBalancingRule></HttpLoadBalancingRules></ApplicationGatewayConfiguration>", { 'cache-control': 'no-cache',
  'content-length': '2157',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.240 (rd_rdfe_stable.150608-1900) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': 'b8b40fb4d932b736b6cc3bf6b1bb87ac',
  date: 'Wed, 17 Jun 2015 08:42:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/appgwprodnext/ApplicationGateways/CliTestAppGate/configuration?api-version=1.0', '*')
  .reply(202, "<GatewayOperationAsyncResponse xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>267bcfe9-e19a-44f8-9b55-4f74c027671f</ID></GatewayOperationAsyncResponse>", { 'cache-control': 'no-cache',
  'content-length': '210',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.240 (rd_rdfe_stable.150608-1900) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': '2445fdfa1b3abf8ab6f9b1f5be5db811',
  date: 'Wed, 17 Jun 2015 08:42:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/appgwprodnext/ApplicationGateways/CliTestAppGate/configuration?api-version=1.0', '*')
  .reply(202, "<GatewayOperationAsyncResponse xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>267bcfe9-e19a-44f8-9b55-4f74c027671f</ID></GatewayOperationAsyncResponse>", { 'cache-control': 'no-cache',
  'content-length': '210',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.240 (rd_rdfe_stable.150608-1900) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': '2445fdfa1b3abf8ab6f9b1f5be5db811',
  date: 'Wed, 17 Jun 2015 08:42:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/appgwprodnext/operation/267bcfe9-e19a-44f8-9b55-4f74c027671f')
  .reply(200, "<GatewayOperation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Data/><HttpStatusCode>OK</HttpStatusCode><ID>267bcfe9-e19a-44f8-9b55-4f74c027671f</ID><OperationCompletedTime>2015-06-17T08:42:28.4711545</OperationCompletedTime><OperationStartedTime>2015-06-17T08:42:26.3454167</OperationStartedTime><Status>Successful</Status></GatewayOperation>", { 'cache-control': 'no-cache',
  'content-length': '401',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.240 (rd_rdfe_stable.150608-1900) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': 'bc0a54891594bbc6baa4e3b65588d69b',
  date: 'Wed, 17 Jun 2015 08:42:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/appgwprodnext/operation/267bcfe9-e19a-44f8-9b55-4f74c027671f')
  .reply(200, "<GatewayOperation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Data/><HttpStatusCode>OK</HttpStatusCode><ID>267bcfe9-e19a-44f8-9b55-4f74c027671f</ID><OperationCompletedTime>2015-06-17T08:42:28.4711545</OperationCompletedTime><OperationStartedTime>2015-06-17T08:42:26.3454167</OperationStartedTime><Status>Successful</Status></GatewayOperation>", { 'cache-control': 'no-cache',
  'content-length': '401',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.240 (rd_rdfe_stable.150608-1900) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': 'bc0a54891594bbc6baa4e3b65588d69b',
  date: 'Wed, 17 Jun 2015 08:42:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/appgwprodnext/ApplicationGateways/CliTestAppGate?api-version=1.0')
  .reply(200, "<ApplicationGateway xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Description i:nil=\"true\"/><DnsName i:nil=\"true\"/><GatewaySize>Medium</GatewaySize><InstanceCount>3</InstanceCount><Name>CliTestAppGate</Name><State>Stopped</State><Subnets><Subnet>CliTestSubnet</Subnet></Subnets><VirtualIPs i:nil=\"true\"/><VnetName>CliTestVnet</VnetName></ApplicationGateway>", { 'cache-control': 'no-cache',
  'content-length': '414',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.240 (rd_rdfe_stable.150608-1900) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': '228bc3f1d9c2b268a7c0b3d7e0d0b128',
  date: 'Wed, 17 Jun 2015 08:43:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/appgwprodnext/ApplicationGateways/CliTestAppGate?api-version=1.0')
  .reply(200, "<ApplicationGateway xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Description i:nil=\"true\"/><DnsName i:nil=\"true\"/><GatewaySize>Medium</GatewaySize><InstanceCount>3</InstanceCount><Name>CliTestAppGate</Name><State>Stopped</State><Subnets><Subnet>CliTestSubnet</Subnet></Subnets><VirtualIPs i:nil=\"true\"/><VnetName>CliTestVnet</VnetName></ApplicationGateway>", { 'cache-control': 'no-cache',
  'content-length': '414',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.240 (rd_rdfe_stable.150608-1900) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': '228bc3f1d9c2b268a7c0b3d7e0d0b128',
  date: 'Wed, 17 Jun 2015 08:43:04 GMT',
  connection: 'close' });
 return result; }]];