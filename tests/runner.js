/*globals mocha:true */
var tests = [
  // link to test files here
  'tests/app/bestPractices',
  'tests/app/arrays',
  'tests/app/objects',
  'tests/app/functions',
  'tests/app/modules',
  'tests/app/flowControl',
  'tests/app/logicalOperators',
  'tests/app/regex',
  'tests/app/recursion',
  'tests/app/numbers',
  'tests/app/count'
];

if (typeof window !== 'undefined') {
  tests.push('tests/app/async');
} else {
  var requirejs = require('requirejs');
  requirejs.config({
    baseUrl : __dirname + '/../',
    nodeRequire : require,
    paths : {
      // Libraries
      underscore : 'node_modules/underscore/underscore',

      // Shim Plugin
      use : 'lib/plugins/use',
      text : 'lib/plugins/text',
      jquery : 'node_modules/jquery/dist/jquery'
    },

    use : {
      underscore : {
        attach : '_'
      }
    }
  });
}

requirejs(tests, function() {
  if (typeof mocha !== 'undefined') {
    mocha.run();
  }
});
