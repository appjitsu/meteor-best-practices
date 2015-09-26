Package.describe({
  version: '0.0.2',
  summary: 'Meteor Best Practices'
});

Package.onUse(function(api) {

  // core requirements
  api.use([
    'react',
    'kadira:flow-router-ssr',
    'kadira:react-layout',
    'materialize:materialize',
    'momentjs:moment',

    // custom packages
    'todo'
    // 'push'
  ]);

  // client only
  api.addFiles([
    'client.js',
  ], 'client');

  // client assets
  api.addAssets([
    'style.less',
  ], 'client');

  // common only
  api.addFiles([
    'accounts.js',
    'router.jsx',
    'collections.js',
    'layouts/default.jsx',
    'layouts/home.jsx'
  ], ['client', 'server']);

  // server only
  api.addFiles([
    'server.js',
    'publications.js'
  ], 'server');

});

// tests
Package.onTest(function(api) {
  api.use('tinytest');
  api.use('app');
  api.addFiles('tests.js');
});
