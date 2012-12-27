if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define([
  'app/recursion'
], function(answers) {
  describe("recursion", function() {
    var fileData = {
      dir : 'app',
      files : [
        'index.html',
        {
          dir : 'js',
          files: [
            'main.js',
            'app.js',
            'misc.js',
            {
              dir : 'vendor',
              files : [
                'jquery.js',
                'underscore.js'
              ]
            }
          ]
        },
        {
          dir : 'css',
          files : [
            'reset.css',
            'main.css'
          ]
        }
      ]
    };

    it("you should be able to return a list of files from the data", function() {
      var result = answers.listFiles(fileData);
      expect(result.length).to.eql(8);
      expect(result.indexOf('index.html') > -1).to.be.ok;
      expect(result.indexOf('main.js') > -1).to.be.ok;
      expect(result.indexOf('underscore.js') > -1).to.be.ok;
    });

    it("you should be able to return a list of files in a subdir", function() {
      var result = answers.listFiles(fileData, 'js');
      expect(result.length).to.eql(5);
      expect(result.indexOf('main.js') > -1).to.be.ok;
      expect(result.indexOf('underscore.js') > -1).to.be.ok;
    });
  });

});
