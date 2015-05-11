// Set the require.js configuration for your application.
require.config({
  // Initialize the application with the main application file
  deps : [ 'tests/runner' ],

  paths : {
    // JavaScript folders
    plugins : '../lib/plugins',
    tests : '../tests',
    app : '../app',

    // Require plugin
    text : '../lib/plugins/text'
  }

});
