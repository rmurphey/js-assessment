module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      all: [
        'app/**/*.js',
        'tests/app/**/*.js',
        'tests/runner.js',
        'Gruntfile.js',
        '!app/bestPractices.js'
      ],
      options: {
        "node" : true,
        "browser" : true,

        "boss" : false,
        "curly": false,
        "debug": false,
        "devel": false,
        "eqeqeq": true,
        "evil": true,
        "forin": false,
        "immed": true,
        "laxbreak": false,
        "newcap": true,
        "noarg": true,
        "noempty": false,
        "nonew": false,
        "nomen": false,
        "plusplus": false,
        "regexp": false,
        "undef": true,
        "sub": true,
        "strict": false
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', [ 'jshint' ]);
};
