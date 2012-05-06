if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define([
  'app/flowControl'
], function(answers) {
  describe("flow control", function() {
    it("you should be able to conditionally branch your code", function() {
      var num = Math.floor(Math.random() * 10) + 1;

      expect(answers.fizzBuzz()).not.to.be.ok();
      expect(answers.fizzBuzz(2)).to.be(2);
      expect(answers.fizzBuzz(3)).to.be('fizz');
      expect(answers.fizzBuzz(5)).to.be('buzz');
      expect(answers.fizzBuzz(num * 3 * 5)).to.be('fizzbuzz');
    });

    it("you should be able to work with logical operators", function() {
      expect(answers.and(false, false)).not.to.be.ok();
      expect(answers.and(true, false)).not.to.be.ok();
      expect(answers.and(true, true)).to.be.ok();

      expect(answers.or(true, false)).to.be.ok();
      expect(answers.or(true, true)).to.be.ok();
      expect(answers.or(false, false)).not.to.be.ok();
    });
  });

});
