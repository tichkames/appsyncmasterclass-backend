
var serverlessSDK = require('./serverless_sdk/index.js');
serverlessSDK = new serverlessSDK({
  orgId: 'tichkames91',
  applicationName: 'appsyncmasterclass-backend-app',
  appUid: '68Qk3kcJ7z8V2GBW3h',
  orgUid: 'e5d090c2-1f5e-478f-9d8b-a5f98bb5e3ca',
  deploymentUid: '6ccc8c91-cebf-4d04-b6aa-2d2c41e2d0b9',
  serviceName: 'appsyncmasterclass-backend',
  shouldLogMeta: true,
  shouldCompressLogs: true,
  disableAwsSpans: false,
  disableHttpSpans: false,
  stageName: 'dev',
  serverlessPlatformStage: 'prod',
  devModeEnabled: false,
  accessKey: null,
  pluginVersion: '4.6.0',
  disableFrameworksInstrumentation: false
});

const handlerWrapperArgs = { functionName: 'appsyncmasterclass-backend-dev-confirmUserSignup', timeout: 6 };

try {
  const userHandler = require('./functions/confirm-user-signup.js');
  module.exports.handler = serverlessSDK.handler(userHandler.handler, handlerWrapperArgs);
} catch (error) {
  module.exports.handler = serverlessSDK.handler(() => { throw error }, handlerWrapperArgs);
}