if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }
if (typeof window !== 'object') { var window = {}; }

define([
  'app/bestPractices'
], function(answers) {
  describe("best practices", function(){
    it("you should avoid global variables", function() {
      answers.globals();
      expect(window.myObject).not.to.be.ok();
    });

    it("you should declare functions safely", function() {
      var val = answers.functions(true);
      expect(val).to.be('a');
    });

    it("you should use parseInt correctly", function() {
      expect(answers.parseInt('12')).to.be(12);
      expect(answers.parseInt('12px')).to.be(12);
      expect(answers.parseInt('012')).to.be(12);
    });

    it("you should understand strict comparison", function() {
      expect(answers.identity(1, '1')).to.be(false);
      expect(answers.identity(1, 1)).to.be(true);
      expect(answers.identity(0, false)).to.be(false);
    });

  });
});
