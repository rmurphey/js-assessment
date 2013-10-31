/*globals describe:true, it:true, expect:true, beforeEach:true */
if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define([
  'app/numbers'
], function(answers) {
  describe('numbers', function() {
    describe('binary operations', function() {
      it('you should be able to find the value of a given bit', function() {
        expect(answers.valueAtBit(128, 8)).to.eql(1);
        expect(answers.valueAtBit(65, 1)).to.eql(1);
        expect(answers.valueAtBit(65, 7)).to.eql(1);
        expect(answers.valueAtBit(128, 1)).to.eql(0);
      });

      it('you should be able to return the base10 representation of a binary string', function() {
        expect(answers.base10('11000000')).to.eql(192);
      });

      it('you should be able to convert an eight-bit number to a binary string', function() {
        expect(answers.convertToBinary(128)).to.eql('10000000');
        expect(answers.convertToBinary(65)).to.eql('01000001');
      });
    });

    describe('decimals', function() {
      it('you should be able to multiply with precision', function() {
        expect(answers.multiply(3, 0.1)).to.eql(0.3);
        expect(answers.multiply(3, 0.2)).to.eql(0.6);
        expect(answers.multiply(3, 0.0001)).to.eql(0.0003);
      });
    });
  });
});
