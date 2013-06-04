/*globals describe:true, it:true, expect:true, beforeEach:true */
if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define([
  'app/numbers'
], function(answers) {
  describe('數字', function() {
    describe('二進位', function() {
      it('找出某一位元的值', function() {
        expect(answers.valueAtBit(128, 8)).to.eql(1);
        expect(answers.valueAtBit(65, 1)).to.eql(1);
        expect(answers.valueAtBit(65, 7)).to.eql(1);
        expect(answers.valueAtBit(128, 1)).to.eql(0);
      });

      it('二進位字串轉十進位數值', function() {
        expect(answers.base10('11000000')).to.eql(192);
      });

      it('數字轉二進位字串（八位元）', function() {
        expect(answers.convertToBinary(128)).to.eql('10000000');
        expect(answers.convertToBinary(65)).to.eql('01000001');
      });
    });

    describe('十進位', function() {
      it('清準的小數乘法', function() {
        expect(answers.multiply(3, 0.1)).to.eql(0.3);
        expect(answers.multiply(3, 0.2)).to.eql(0.6);
        expect(answers.multiply(3, 0.0001)).to.eql(0.0003);
      });
    });
  });
});
