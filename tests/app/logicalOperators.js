/*jshint expr:true */
/*globals describe:true, it:true, expect:true, beforeEach:true */
if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define([
  'app/logicalOperators'
], function(answers) {
  describe('邏輯判斷', function(){
    it('邏輯AND', function() {
      expect(answers.and(false, false)).not.to.be.ok;
      expect(answers.and(true, false)).not.to.be.ok;
      expect(answers.and(true, true)).to.be.ok;
    });

    it('邏輯OR', function() {
      expect(answers.or(true, false)).to.be.ok;
      expect(answers.or(true, true)).to.be.ok;
      expect(answers.or(false, false)).not.to.be.ok;
    });
  });
});
