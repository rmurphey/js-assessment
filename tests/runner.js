var tests = [
  // link to test files here

  'tests/app/arrays',
  'tests/app/objects',
  'tests/app/functions',
  'tests/app/async',
  'tests/app/views'
];

require(tests, function() {
  mocha.run();
});
