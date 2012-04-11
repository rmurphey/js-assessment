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

    // Shim Plugin
    use : '../lib/plugins/use',
    text : '../lib/plugins/text'
  },

  use : {
    underscore : {
      attach : '_'
    },
    backbone : {
      deps : [ 'use!underscore', 'jquery' ],
      attach  : 'Backbone'
    }
  }
});
