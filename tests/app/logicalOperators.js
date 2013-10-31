/*jshint expr:true */
/*globals describe:true, it:true, expect:true, beforeEach:true */
if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define([
  'app/logicalOperators'
], function(answers) {
  describe('logical operators', function(){
    it('you should be able to work with logical and', function() {
      expect(answers.and(false, false)).not.to.be.ok;
      expect(answers.and(true, false)).not.to.be.ok;
      expect(answers.and(true, true)).to.be.ok;
      expect(answers.and(3, 4)).to.be.ok;
    });

    it('you should be able to work with logical or', function() {
      expect(answers.or(true, false)).to.be.ok;
      expect(answers.or(true, true)).to.be.ok;
      expect(answers.or(false, false)).not.to.be.ok;
      expect(answers.or(3, 4)).to.not.eq(7);
    });
  });
});
