/*globals describe:true, it:true, expect:true, beforeEach:true */
if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define([
  'app/modules'
], function(answers) {
  describe('模組', function() {
    it('函式回傳模組（物件）', function() {
      var module = answers.createModule('hello', 'matt');

      expect(module.sayIt).to.be.a('function');
      expect(module.name).to.eql('matt');
      expect(module.greeting).to.eql('hello');
      expect(module.sayIt()).to.eql('hello, matt');

      module.name = 'katniss';
      module.greeting = 'hi';
      expect(module.name).to.eql('katniss');
      expect(module.greeting).to.eql('hi');
      expect(module.sayIt()).to.eql('hi, katniss');
    });
  });
});
