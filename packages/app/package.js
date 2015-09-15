Package.describe({
  version: '0.0.1',
  summary: 'Meteor Best Practices'
});

Package.onUse(function(api) {

  // core requirements
  api.use([
    'jsx',
    'react',
    'kadira:flow-router-ssr',
    'kadira:react-layout',
    'materialize:materialize@=0.97.0',
    'matb33:collection-hooks',
    'dburles:collection-helpers',
    'momentjs:moment'

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
    'collections.jsx',
    'layouts/default.jsx',
    'layouts/home.jsx',
    'components/todo_page.jsx',
    'components/todo_list.jsx'
  ], ['client', 'server']);

  // server only
  api.addFiles([
    'server.js',
    'methods.js',
    'publications.js'
  ], 'server');

});

// tests
Package.onTest(function(api) {
  api.use('tinytest');
  api.use('app');
  api.addFiles('tests.js');
});
