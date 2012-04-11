define([ 'use!underscore' ], function(_) {
  describe("functions", function() {
    var sayIt = function(greeting, name, punctuation) {
          return greeting + ', ' + name + (punctuation || '!');
        },
        fn = function() {};

    it("should be possible to use an array of arguments to call a function", function() {
      var result = fn([ 'Hello', 'Ellie', '!' ]);
      expect(result).to.be('Hello, Ellie!');
    });

    it("should be possible to change the context in which a function is called", function() {
      var speak = function() {
            sayIt(this.greeting, this.name, '!!!');
          },
          obj = {
            greeting : 'Hello',
            name : 'Rebecca'
          };

      // define a function for fn that calls the speak function such that the
      // following test will pass
      expect(fn()).to.be('Hello, Rebecca!');
    });

    it("should be possible to return a function from a function", function() {
      // define a function for fn so that the following will pass
      expect(fn('Hello')('world')).to.be('Hello, world');
    });

    it("should be possible to declare a 'partial' function", function() {
      // define a function for fn so that the following will pass
      var partial = fn(sayIt, 'Hello', 'Ellie');
      expect(partial('!!!')).to.be('Hello, Ellie!!!');
    });
  });
});
