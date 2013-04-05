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
      var formattedStr;
      var data = [
        'abcdef abcde abc def',
        'abc abc abc',
        'a b c def'
      ];
      var wrapCol = 5;

      var computedData = [
        'abcdef\nabcde\nabc\ndef',
        'abc\nabc\nabc',
        'a b c\ndef'
      ];


      data.forEach(function(str, index) {
        formattedStr = answers.wordWrap(str, wrapCol);
        //every char at the wrap line should be a space
        expect(formattedStr).to.eql(computedData[index]);
        //the last characters should still be the last characters
        expect(formattedStr.charAt(formattedStr.length-1)).to.eql(computedData[index].charAt(computedData[index].length-1));
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
