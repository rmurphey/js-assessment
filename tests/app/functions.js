define([ 'use!underscore' ], function(_) {
  describe("functions", function() {
    var sayIt = function(greeting, name, punctuation) {
          return greeting + ', ' + name + (punctuation || '!');
        },
        fn = function() {};

    it("you should be able to use an array as arguments when calling a function", function() {
      var result = fn([ 'Hello', 'Ellie', '!' ]);
      expect(result).to.be('Hello, Ellie!');
    });

    it("you should be able to change the context in which a function is called", function() {
      var speak = function() {
            return sayIt(this.greeting, this.name, '!!!');
          },
          obj = {
            greeting : 'Hello',
            name : 'Rebecca'
          };

      // define a function for fn that calls the speak function such that the
      // following test will pass
      expect(fn()).to.be('Hello, Rebecca!!!');
    });

    it("you should be able to return a function from a function", function() {
      // define a function for fn so that the following will pass
      expect(fn('Hello')('world')).to.be('Hello, world');
    });

    it("you should be able to create a 'partial' function", function() {
      // define a function for fn so that the following will pass
      var partial = fn(sayIt, 'Hello', 'Ellie');
      expect(partial('!!!')).to.be('Hello, Ellie!!!');
    });

    it("you should be able to use arguments", function () {
      fn = function () {
        // you can only edit function body here
      };

      var a = Math.random(), b = Math.random(), c = Math.random(), d = Math.random();
      expect(fn(a)).to.be(a);
      expect(fn(a, b)).to.be(a + b);
      expect(fn(a, b, c)).to.be(a + b + c);
      expect(fn(a, b, c, d)).to.be(a + b + c + d);
    });

    it("you should be able to apply functions", function () {
      fn = function (fun) {
        // you can only edit function body here
      };

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

        fn(iTake2Arguments, a, b);
        fn(iTake3Arguments, a, b, c);
        expect(wasITake2ArgumentsCalled).to.be.ok();
        expect(wasITake3ArgumentsCalled).to.be.ok();
      })();
    });

    it("you should be able to curry existing functions", function () {
      fn = function (fun) {
        // you can only edit function body here
      };

      var curryMe = function (x, y, z) {
        return x / y * z;
      };

      var a = Math.random(), b = Math.random(), c = Math.random();
      expect(fn(curryMe)(a, b, c)).to.be(curryMe(a, b, c));
      expect(fn(curryMe, a)(b, c)).to.be(curryMe(a, b, c));
      expect(fn(curryMe, a, b)(c)).to.be(curryMe(a, b, c));
      expect(fn(curryMe, a, b, c)()).to.be(curryMe(a, b, c));
      expect(fn(curryMe, a, b, c)()).to.be(curryMe(a, b, c));
      expect(fn(curryMe, b, a, c)()).to.be(curryMe(b, a, c));
      expect(fn(curryMe)(b)(a)(c)).to.be(curryMe(b, a, c));
    });

    it('you should be able to use closures', function () {
      var arr = [ Math.random(), Math.random(), Math.random(), Math.random() ];
      var doSomeStuff;

      fn = function (vals) {
        // you can only edit function body here
      };

      doSomeStuff = function (x) { return x * x; };

      var funcs = fn(arr);
      expect(funcs).to.have.length(arr.length);
      for (var i = funcs.length - 1; i >= 0; i--) {
        expect(funcs[i]()).to.be(doSomeStuff(arr[i]));
      };
    });
  });
});
