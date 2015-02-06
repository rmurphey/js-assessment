/*jshint expr:true */
/*globals describe:true, it:true, expect:true, beforeEach:true */
if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define([
  'app/recursion',
  'underscore'
], function(answers, _) {
  describe('recursion', function() {
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

    it('you should be able to return a list of files from the data', function() {
      var result = answers.listFiles(fileData);
      expect(result.length).to.eql(8);
      expect(result.indexOf('index.html') > -1).to.be.ok;
      expect(result.indexOf('main.js') > -1).to.be.ok;
      expect(result.indexOf('underscore.js') > -1).to.be.ok;
    });

    it('you should be able to return a list of files in a subdir', function() {
      var result = answers.listFiles(fileData, 'js');
      expect(result.length).to.eql(5);
      expect(result.indexOf('main.js') > -1).to.be.ok;
      expect(result.indexOf('underscore.js') > -1).to.be.ok;
    });
  });

  describe('permutation', function() {
    var arr = [ 1, 2, 3, 4 ];
    var answer = [
      [1, 2, 3, 4],
      [1, 2, 4, 3],
      [1, 3, 2, 4],
      [1, 3, 4, 2],
      [1, 4, 2, 3],
      [1, 4, 3, 2],
      [2, 1, 3, 4],
      [2, 1, 4, 3],
      [2, 3, 1, 4],
      [2, 3, 4, 1],
      [2, 4, 1, 3],
      [2, 4, 3, 1],
      [3, 1, 2, 4],
      [3, 1, 4, 2],
      [3, 2, 1, 4],
      [3, 2, 4, 1],
      [3, 4, 1, 2],
      [3, 4, 2, 1],
      [4, 1, 2, 3],
      [4, 1, 3, 2],
      [4, 2, 1, 3],
      [4, 2, 3, 1],
      [4, 3, 1, 2],
      [4, 3, 2, 1]
    ];

    it('you should be able to return the permutations of an array', function() {
      var result = answers.permute(arr);
      var resultStrings = result.map(function(r) { return r.join(''); });

      expect(result.length).to.eql(answer.length);

      answer.forEach(function(a) {
        expect(resultStrings.indexOf(a.join('')) > -1).to.be.ok;
      });
    });

    it('you should be able to return the nth number in a fibonacci sequence', function() {
      expect(answers.fibonacci(2)).to.eql(1);
      expect(answers.fibonacci(6)).to.eql(8);
    });

    it('you should be able to return the set of all valid combinations of n pairs of parentheses.', function() {
      var expected = [ '((()))', '(()())', '(())()', '()(())', '()()()'];
      var result = answers.validParentheses(3);

      expect(result.length).to.eql(5);
      expected.forEach(function(c) {
        expect(result).to.contain(c);
      });
    });
  });

});
