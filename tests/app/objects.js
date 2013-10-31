/*globals describe:true, it:true, expect:true, beforeEach:true */
if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define([
  'app/objects'
], function(answers) {
  describe('objects and context', function() {
    var a, b, C;

    beforeEach(function() {
      a = {
        name : 'Matt',
        greeting : 'Hello',
        sayIt : function() {
          return  this.greeting + ', ' +
                  this.name + '!';
        }
      };

      b = {
        name : 'Rebecca',
        greeting : 'Yo'
      };

      C = function(name) {
        this.name = name;
        return this;
      };
    });

    it('you should be able to alter the context in which a method runs', function() {
      // define a function for fn so that the following will pass
      expect(answers.alterContext(a.sayIt, b)).to.eql('Yo, Rebecca!');
    });

    it('you should be able to alter multiple objects at once', function() {
      // define a function for fn so that the following will pass
      var obj1 = new C('Rebecca'),
          obj2 = new C('Melissa'),
          greeting = 'What\'s up';

      answers.alterObjects(C, greeting);

      expect(obj1.greeting).to.eql(greeting);
      expect(obj2.greeting).to.eql(greeting);
      expect(new C('Ellie').greeting).to.eql(greeting);
    });

    it('you should be able to iterate over an object\'s "own" properties', function() {
      // define a function for fn so that the following will pass
      var C = function() {
        this.foo = 'bar';
        this.baz = 'bim';
      };

      C.prototype.bop = 'bip';

      var obj = new C();

      expect(answers.iterate(obj)).to.eql([ 'foo: bar', 'baz: bim' ]);
    });
  });
});
