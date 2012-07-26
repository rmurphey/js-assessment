if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define([
  'app/modules'
], function(answers) {
  describe("the module pattern", function() {
    it("you should be able to create a function that returns a module", function() {
      var module = answers.createModule('hello', 'matt');

      expect(module.sayIt).to.be.a('function');
      expect(module.name).to.be.ok('matt');
      expect(module.greeting).to.be.ok('hello');
      expect(module.sayIt()).to.be('hello, matt');

      module.name = 'katniss';
      module.greeting = 'hi';
      expect(module.name).to.be.ok('katniss');
      expect(module.greeting).to.be.ok('hi');
      expect(module.sayIt()).to.be('hi, katniss');
    });
  });
});
