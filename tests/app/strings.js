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

    it('you should be able to wrap lines at a given number of columns, without breaking words', function() {
      var wrapCol = 5;
      var inputStrings = [
        'abcdef abcde abc def',
        'abc abc abc',
        'a b c def'
      ];
      var outputStrings = [
        'abcdef\nabcde\nabc\ndef',
        'abc\nabc\nabc',
        'a b c\ndef'
      ];
      var formattedStr;

      inputStrings.forEach(function(str, index) {
        formattedStr = answers.wordWrap(str, wrapCol);
        expect(formattedStr).to.eql(outputStrings[index]);
      });
    });

    it('you should be able to reverse a string', function() {
      var inputStrings = [
        'abc',
        'i am a string of characters',
        'A man, a plan, a canal: Panama'
      ];
      var outputStrings = [
        'cba',
        'sretcarahc fo gnirts a ma i',
        'amanaP :lanac a ,nalp a ,nam A'
      ];

      inputStrings.forEach(function(str, index) {
        var result = answers.reverseString(str);
        expect(result).to.eql(outputStrings[index]);
      });
    });
  });
});
