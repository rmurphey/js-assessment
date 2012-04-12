define([ 'use!underscore' ], function(_) {
  describe("flow control", function() {
    var fn;

    beforeEach(function() {
      fn = function() { };
    });

    it("you should be able to conditionally branch your code", function() {

      fn = function(n, r) {

        // write a function that receives a number as its argument;
        // if the number is divisible by 3, the function should return 'fizz';
        // if the number is divisible by 5, the function should return 'buzz';
        // if the number is divisible the 3 and 5, the function should return
        // 'fizzbuzz';
        // otherwise the function should return the number

        r = n % 3 ? "" : "fizz";
        r += n % 5 ? "" : "buzz";
        return r || n;
      };

      // replace the following test with tests that prove your function works
      expect(fn(3)).to.eql("fizz");
      expect(fn(5)).to.eql("buzz");
      expect(fn(15)).to.eql("fizzbuzz");
      expect(fn(1)).to.eql(1);
      expect(fn(22)).to.eql(22);
      expect(fn(7)).to.eql(7);
    });

    it("you should be able to work with logical operators", function() {
      var and = function(val1, val2) {
            return val1 && val2;
          },

          or = function(val1, val2) {
            return val1 || val2;
          };

      expect(and(false, false)).not.to.be.ok();
      expect(and(true, false)).not.to.be.ok();
      expect(and(true, true)).to.be.ok();

      expect(or(true, false)).to.be.ok();
      expect(or(true, true)).to.be.ok();
      expect(or(false, false)).not.to.be.ok();
    });
  });

});
