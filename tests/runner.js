var requirejs = require('requirejs');
var mocha = require('mocha');

requirejs.config({
  baseUrl : __dirname + '/../',
  nodeRequire : require,
  paths : {
    // Libraries
    underscore : 'lib/underscore',

    // Shim Plugin
    use : 'lib/plugins/use',
    text : 'lib/plugins/text',
    jquery : 'lib/jquery'
  },

  use : {
    underscore : {
      attach : '_'
    }
  }
});

var tests = [
  // link to test files here
  'tests/app/arrays',
  'tests/app/objects',
  'tests/app/functions',
  // 'tests/app/async',
  // 'tests/app/views'
];

requirejs(tests, function() {
  // mocha.run();
});
