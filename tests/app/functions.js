/*jshint expr:true */
/*globals describe:true, it:true, expect:true, beforeEach:true */
if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define([
  'underscore',
  'app/functions'
], function(_, answers) {

  describe('functions', function() {
    var sayItCalled = false;
    var sayIt = function(greeting, name, punctuation) {
          sayItCalled = true;
          return greeting + ', ' + name + (punctuation || '!');
        };

    beforeEach(function () {
      sayItCalled = false;
    });

    it('you should be able to use an array as arguments when calling a function', function() {
      var result = answers.argsAsArray(sayIt, [ 'Hello', 'Ellie', '!' ]);
      expect(result).to.eql('Hello, Ellie!');
      expect(sayItCalled).to.be.ok;
    });

    it('you should be able to change the context in which a function is called', function() {
      var speak = function() {
            return sayIt(this.greeting, this.name, '!!!');
          },
          obj = {
            greeting : 'Hello',
            name : 'Rebecca'
          };

      var result = answers.speak(speak, obj);
      expect(result).to.eql('Hello, Rebecca!!!');
      expect(sayItCalled).to.be.ok;
    });

    it('you should be able to return a function from a function', function() {
      expect(answers.functionFunction('Hello')('world')).to.eql('Hello, world');
      expect(answers.functionFunction('Hai')('can i haz funxtion?')).to.eql('Hai, can i haz funxtion?');
    });

    it('you should be able to use closures', function () {
      var arr = [ Math.random(), Math.random(), Math.random(), Math.random() ];
      var square = function (x) { return x * x; };

      var funcs = answers.makeClosures(arr, square);
      expect(funcs).to.have.length(arr.length);

      for (var i = 0; i < arr.length; i++) {
        expect(funcs[i]()).to.eql(square(arr[i]));
      }
    });

    it('you should be able to create a "partial" function', function() {
      var partial = answers.partial(sayIt, 'Hello', 'Ellie');
      expect(partial('!!!')).to.eql('Hello, Ellie!!!');
      expect(sayItCalled).to.be.ok;
    });

    it('you should be able to use arguments', function () {
      var a = Math.random(),
          b = Math.random(),
          c = Math.random(),
          d = Math.random();

      expect(answers.useArguments(a)).to.eql(a);
      expect(answers.useArguments(a, b)).to.eql(a + b);
      expect(answers.useArguments(a, b, c)).to.eql(a + b + c);
      expect(answers.useArguments(a, b, c, d)).to.eql(a + b + c + d);
    });

    it('you should be able to apply functions with arbitrary numbers of arguments', function () {
      (function () {
        var a = Math.random(), b = Math.random(), c = Math.random();

        var wasITake2ArgumentsCalled = false;
        var iTake2Arguments = function (firstArgument, secondArgument) {
          expect(arguments.length).to.eql(2);
          expect(firstArgument).to.eql(a);
          expect(secondArgument).to.eql(b);

          wasITake2ArgumentsCalled = true;
        };

        var wasITake3ArgumentsCalled = false;
        var iTake3Arguments = function (firstArgument, secondArgument, thirdArgument) {
          expect(arguments.length).to.eql(3);
          expect(firstArgument).to.eql(a);
          expect(secondArgument).to.eql(b);
          expect(thirdArgument).to.eql(c);

          wasITake3ArgumentsCalled = true;
        };

        answers.callIt(iTake2Arguments, a, b);
        answers.callIt(iTake3Arguments, a, b, c);

        expect(wasITake2ArgumentsCalled).to.be.ok;
        expect(wasITake3ArgumentsCalled).to.be.ok;
      }());
    });


    it('you should be able to create a "partial" function for variable number of applied arguments', function () {
      var partialMe = function (x, y, z) {
        return x / y * z;
      };

      var a = Math.random(), b = Math.random(), c = Math.random();
      expect(answers.partialUsingArguments(partialMe)(a, b, c)).to.eql(partialMe(a, b, c));
      expect(answers.partialUsingArguments(partialMe, a)(b, c)).to.eql(partialMe(a, b, c));
      expect(answers.partialUsingArguments(partialMe, a, b)(c)).to.eql(partialMe(a, b, c));
      expect(answers.partialUsingArguments(partialMe, a, b, c)()).to.eql(partialMe(a, b, c));
    });

    it('you should be able to curry existing functions', function () {
      var curryMe = function (x, y, z) {
        return x / y * z;
      };

      var a = Math.random(), b = Math.random(), c = Math.random(), result;

      result = answers.curryIt(curryMe);
      expect(typeof result).to.eql('function');
      expect(result.length).to.eql(1);

      result = answers.curryIt(curryMe)(a);
      expect(typeof result).to.eql('function');
      expect(result.length).to.eql(1);

      result = answers.curryIt(curryMe)(a)(b);
      expect(typeof result).to.eql('function');
      expect(result.length).to.eql(1);

      result = answers.curryIt(curryMe)(a)(b)(c);
      expect(typeof result).to.eql('number');
      expect(result).to.eql(curryMe(a, b, c));
    });
  });
});
