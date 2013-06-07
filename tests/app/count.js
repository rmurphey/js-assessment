/*globals describe:true, it:true, expect:true, beforeEach:true */
if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define([
  'app/count'
], function(answers) {
  describe('counter', function () {
    var nums;

    beforeEach(function () {
      nums = [];

      if (typeof console === 'undefined') {
        console = {};
      }

      console.log = function (val) {
        nums.push(val);
      };
    });

    it('should count from start number to end number, one per second', function (done) {
      this.timeout(6000);
      answers.count(1, 5);

      setTimeout(function () {
        expect(nums.length > 1).to.be.ok;
        expect(nums.length < 5).to.be.ok;
      }, 2000);

      setTimeout(function () {
        expect(nums.length).to.eql(5);
        expect(nums[0]).to.eql(1);
        expect(nums[4]).to.eql(5);
        done();
      }, 5500);
    });
  });
});