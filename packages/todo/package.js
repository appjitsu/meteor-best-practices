Package.describe({
  version: '0.0.1',
  summary: 'Todo List Components'
});

Package.onUse(function(api) {

  // core requirements
  api.use([
    'react',
    'kadira:flow-router-ssr',
    'materialize:materialize',
    'momentjs:moment'
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
    'collections.js',
    'components/todo_page.jsx',
    'components/todo_list.jsx'
  ], ['client', 'server']);

  // server only
  api.addFiles([
    'server.js',
    'publications.js'
  ], 'server');

  api.export('TodoList');
  api.export('TodoPage');

});

// tests
Package.onTest(function(api) {
  api.use('tinytest');
  api.use('app');
  api.addFiles('tests.js');
});
