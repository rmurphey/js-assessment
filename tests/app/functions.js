define([ 'use!underscore' ], function(_) {
  describe("functions", function() {
    var sayIt = function(greeting, name, punctuation) {
          return greeting + ', ' + name + (punctuation == null ? '!' : punctuation);
        },
        fn = function() {};

    it("you should be able to use an array as arguments when calling a function", function() {

      fn = function (a) {
        return sayIt.apply(this, a);
      }

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

      fn = function () {
        return speak.call(obj);
      }

      expect(fn()).to.be('Hello, Rebecca!!!');
    });

    it("you should be able to return a function from a function", function() {

      fn = function (a) {
        
        var greeting,
            name,
            punctuation = "",
            innerFn = function (a) {

              if (!greeting) greeting = a;
              else if (!name) name = a;
              else if (!punctuation) punctuation = a;

              return sayIt(greeting, name, punctuation);
            };

        innerFn(a);
        return innerFn;
      }

      expect(fn('Hello')('world')).to.be('Hello, world');
    });

    it("you should be able to create a 'partial' function", function() {

      fn = function () {
        
        var callFn = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            innerFn = function () {

              args = args.concat(Array.prototype.slice.call(arguments, 0));

              return callFn.apply(this, args);
            };

        return innerFn;
      }

      var partial = fn(sayIt, 'Hello', 'Ellie');
      expect(partial('!!!')).to.be('Hello, Ellie!!!');
    });
  });
});
