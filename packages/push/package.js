Package.describe({
  version: '0.0.1',
  summary: 'Push Notifications'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  // core requirements
  api.use([
    'raix:push'
  ]);

  // client only
  api.addFiles([
    'client.js'
  ], 'client');

  // server only
  api.addFiles([
    'methods.js',
    'server.js'
  ], 'server');

  // common
  api.addFiles([
    'common.js'
  ], ['client', 'server']);

  api.export('Push');

});

// tests
Package.onTest(function(api) {
  api.use('tinytest');
  api.use('app');
  api.addFiles('tests.js');
});
