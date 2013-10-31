// Set the require.js configuration for your application.
require.config({
  // Initialize the application with the main application file
  deps : [ 'tests/runner' ],

  paths : {
    // JavaScript folders
    lib : '../lib',
    plugins : '../lib/plugins',
    tests : '../tests',
    app : '../app',

    // Libraries
    jquery : '../lib/jquery',
    underscore : '../lib/underscore',
    backbone : '../lib/backbone',

    // Require plugin
    text : '../lib/plugins/text'
  },

  shim : {
    underscore : {
      exports : '_'
    },
    backbone : {
      deps : [ 'underscore', 'jquery' ],
      exports  : 'Backbone'
    }
  }
});
