/*globals describe:true, it:true, expect:true, beforeEach:true */
if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define([
  'app/strings'
], function(answers) {

  describe('strings', function() {
    it('you should be able to reduce duplicate characters to a desired minimum', function() {
      expect(answers.reduceString('aaaabbbb', 2)).to.eql('aabb');
      expect(answers.reduceString('xaaabbbb', 2)).to.eql('xaabb');
      expect(answers.reduceString('aaaabbbb', 1)).to.eql('ab');
      expect(answers.reduceString('aaxxxaabbbb', 2)).to.eql('aaxxaabb');
    });

    it('you should be able to wrap lines at some arbitrary count, but don\'t break words', function() {
      //create the data
      var formatted_str;
      var data = [
        'abcdef abcde abc def',
        'abc abc abc',
        'a b c def'
      ];
      var wrap_col = 5;

      var computed_data = [
        'abcdef\nabcde\nabc\ndef',
        'abc\nabc\nabc',
        'a b c\ndef'
      ];


      data.forEach(function(str, index) {
        formatted_str = answers.wordwrap(str, wrap_col);
        //every char at the wrap line should be a space
        expect(formatted_str).to.eql(computed_data[index]);
        //the last characters should still be the last characters
        expect(formatted_str.charAt(formatted_str.length-1)).to.eql(computed_data[index].charAt(computed_data[index].length-1));
      });

    });
    it('you should be able to reverse a string', function() {
      var data = [
        'abc',
        'i am a string of characters',
        'A man, a plan, a canal: Panama'
      ];

      data.forEach(function(str) {
        var result = answers.reverseString(str);
        //should be same length
        expect(result.length).to.eql(str.length);
        //middle character should be the same
        var mid = Math.floor(result.length);
        expect(result.charAt(mid)).to.eql(str.charAt(mid));
      });
    });
  });
});