/*jshint expr:true */
/*globals describe:true, it:true, expect:true, beforeEach:true */
if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define([
  'app/flowControl'
], function(answers) {
  describe('flow control', function() {
    it('you should be able to conditionally branch your code', function() {
      var num = 0;

      while (num % 3 === 0 || num % 5 === 0) {
        num = Math.floor(Math.random() * 10) + 1;
      }

      expect(answers.fizzBuzz()).not.to.be.ok;
      expect(answers.fizzBuzz('foo')).not.to.be.ok;
      expect(answers.fizzBuzz(2)).to.eql(2);
      expect(answers.fizzBuzz(101)).to.eql(101);

      expect(answers.fizzBuzz(3)).to.eql('fizz');
      expect(answers.fizzBuzz(6)).to.eql('fizz');
      expect(answers.fizzBuzz(num * 3)).to.eql('fizz');

      expect(answers.fizzBuzz(5)).to.eql('buzz');
      expect(answers.fizzBuzz(10)).to.eql('buzz');
      expect(answers.fizzBuzz(num * 5)).to.eql('buzz');

      expect(answers.fizzBuzz(15)).to.eql('fizzbuzz');
      expect(answers.fizzBuzz(num * 3 * 5)).to.eql('fizzbuzz');
    });
  });
});
