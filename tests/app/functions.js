if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define([
  'use!underscore',
  'app/functions'
], function(_, answers) {

  describe("functions", function() {
    var sayItCalled = false;
    var sayIt = function(greeting, name, punctuation) {
          sayItCalled = true;
          return greeting + ', ' + name + (punctuation || '!');
        };

    beforeEach(function () {
      sayItCalled = false;
    });

    it("you should be able to use an array as arguments when calling a function", function() {
      var result = answers.argsAsArray(sayIt, [ 'Hello', 'Ellie', '!' ]);
      expect(result).to.be('Hello, Ellie!');
      expect(sayItCalled).to.be.ok();
    });

    it("you should be able to change the context in which a function is called", function() {
      var speak = function() {
            return sayIt(this.greeting, this.name, '!!!');
          },
          obj = {
            greeting : 'Hello',
            name : 'Rebecca'
          };

      var result = answers.speak(speak, obj);
      expect(result).to.be('Hello, Rebecca!!!');
      expect(sayItCalled).to.be.ok();
    });

    it("you should be able to return a function from a function", function() {
      expect(answers.functionFunction('Hello')('world')).to.be('Hello, world');
      expect(answers.functionFunction('Hai')('can i haz funxtion?')).to.be('Hai, can i haz funxtion?');
    });

    it('you should be able to use closures', function () {
      var arr = [ Math.random(), Math.random(), Math.random(), Math.random() ];
      var doSomeStuff;

      doSomeStuff = function (x) { return x * x; };

      var funcs = answers.makeClosures(arr, doSomeStuff);
      expect(funcs).to.have.length(arr.length);

      for (var i = 0; i < arr.length; i++) {
        expect(funcs[i]()).to.be(doSomeStuff(arr[i]));
      }
    });

    it("you should be able to create a 'partial' function", function() {
      var partial = answers.partial(sayIt, 'Hello', 'Ellie');
      expect(partial('!!!')).to.be('Hello, Ellie!!!');
      expect(sayItCalled).to.be.ok();
    });

    it("you should be able to use arguments", function () {
      var a = Math.random(),
          b = Math.random(),
          c = Math.random(),
          d = Math.random();

      expect(answers.useArguments(a)).to.be(a);
      expect(answers.useArguments(a, b)).to.be(a + b);
      expect(answers.useArguments(a, b, c)).to.be(a + b + c);
      expect(answers.useArguments(a, b, c, d)).to.be(a + b + c + d);
    });

    it("you should be able to apply functions with arbitrary numbers of arguments", function () {
      (function () {
        var a = Math.random(), b = Math.random(), c = Math.random();

        var wasITake2ArgumentsCalled = false;
        var iTake2Arguments = function (firstArgument, secondArgument) {
          expect(arguments.length).to.be(2);
          expect(firstArgument).to.be(a);
          expect(secondArgument).to.be(b);

          wasITake2ArgumentsCalled = true;
        };

        var wasITake3ArgumentsCalled = false;
        var iTake3Arguments = function (firstArgument, secondArgument, thirdArgument) {
          expect(arguments.length).to.be(3);
          expect(firstArgument).to.be(a);
          expect(secondArgument).to.be(b);
          expect(thirdArgument).to.be(c);

          wasITake3ArgumentsCalled = true;
        };

        answers.callIt(iTake2Arguments, a, b);
        answers.callIt(iTake3Arguments, a, b, c);

        expect(wasITake2ArgumentsCalled).to.be.ok();
        expect(wasITake3ArgumentsCalled).to.be.ok();
      })();
    });

    it("you should be able to curry existing functions", function () {
      var curryMe = function (x, y, z) {
        return x / y * z;
      };

      var a = Math.random(), b = Math.random(), c = Math.random();
      expect(answers.curryIt(curryMe)(a, b, c)).to.be(curryMe(a, b, c));
      expect(answers.curryIt(curryMe, a)(b, c)).to.be(curryMe(a, b, c));
      expect(answers.curryIt(curryMe, a, b)(c)).to.be(curryMe(a, b, c));
      expect(answers.curryIt(curryMe, a, b, c)()).to.be(curryMe(a, b, c));
      expect(answers.curryIt(curryMe, b, a, c)()).to.be(curryMe(b, a, c));
    });
  });
});
