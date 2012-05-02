var tests = [
  // link to test files here

  'tests/app/arrays',
  'tests/app/async',
  'tests/app/flowControl',
  'tests/app/functions',
  'tests/app/modules',
  'tests/app/objects',
  'tests/app/views'
];

require(tests, function() {
  mocha.run();
});
