module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

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
        jshintrc: '.jshintrc'
      }
    },
    watch: {
      scripts: {
        files: ['app/**/*.js', 'tests/app/**/*.js'],
        tasks: ['jshint'],
        options: {
          livereload: true
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 4444,
        base: {
          path: __dirname,
          options: {
            index: 'tests/runner.html',
            keepalive: true
          }
        }
      }
    }
  }
  });

  grunt.registerTask('default', [ 'jshint' ]);
  grunt.registerTask('develop', [ 'connect', 'watch' ]);
};
