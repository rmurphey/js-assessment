// Set the require.js configuration for your application.
require.config({
  // Initialize the application with the main application file
  deps : [ 'tests/runner' ],

  paths : {
    // JavaScript folders
    plugins : '../lib/plugins',
    tests : '../tests',
    app : '../app',

    // Libraries
    jquery : '../node_modules/jquery/dist/jquery',
    underscore : '../node_modules/underscore/underscore',
    backbone : '../node_modules/backbone/backbone',

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
