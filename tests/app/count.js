if ( typeof window === 'undefined' ) {
  require('../../app/count');
  var expect = require('chai').expect;
}

/**
  * This test describes a function, count, that takes two arguments: a starting number,
  * and an ending number. The function should console.log each number from the start
  * number to the end number, one number per 1/10th of a second. The function should
  * return an object with a cancel method, which should cancel the counting.
*/

describe('counter', function () {
  var nums;
  var origConsoleLog;

  beforeEach(function () {
    nums = [];

    if (typeof console === 'undefined') {
      console = {
        log: undefined
      };
    }
    origConsoleLog = console.log;
    console.log = function (val) {
      nums.push(val);
    };
  });

  afterEach(function () {
    console.log = origConsoleLog;
  });

  it('should count from start number to end number, one per 1/10th of a second', function (done) {
    this.timeout(600);
    countAnswers.count(1, 5);

    setTimeout(function () {
      expect(nums.length > 1).to.be.ok;
      expect(nums.length < 5).to.be.ok;
    }, 200);

    setTimeout(function () {
      expect(nums.length).to.eql(5);
      expect(nums[0]).to.eql(1);
      expect(nums[4]).to.eql(5);
      done();
    }, 550);
  });

  it('should provide a method to cancel the counting', function (done) {
    this.timeout(600);

    var counter = countAnswers.count(1, 5);
    counter.cancel();

    setTimeout(function () {
      expect(nums.length < 5).to.be.ok;
      done();
    }, 550);
  });
});
