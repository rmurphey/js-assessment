var tests = [
  // link to test files here

  // 'tests/app/arrays',
  // 'tests/app/objects',
  // 'tests/app/async',
  'tests/app/views'

  // 'tests/app/models',
  // 'tests/app/prototypes',
  // 'tests/app/functions'
];

require(tests, function() {
  mocha.run();
});
