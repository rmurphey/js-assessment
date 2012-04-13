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
      // define a function for fn so that the following will pass

      //sum all arguments that are passed to the function
      expect(fn(1)).to.be(1);
      expect(fn(1, 2)).to.be(3);
      expect(fn(1, 2, 3)).to.be(6);
      expect(fn(1, 2, 3, 4)).to.be(10);
      expect(fn(1, 2, 3, 4, 5)).to.be(15);
      expect(fn(1, 2, 3, 4, 5, 6)).to.be(21);
      expect(fn(54, 6, 543, 6543, 32, 321)).to.be(7499);
    });

    it("you should be able to curry existing functions", function () {
      // define a function for fn so that the following will pass

      var curryMe1 = function (name, surname, company) { 
        return "Hey! I'm " + name + " " + surname + " from " + company; 
      };

      expect(fn(curryMe1)("Mark", "Zuckerberg", "Facebook")).to.be("Hey! I'm Mark Zuckerberg from Facebook");
      expect(fn(curryMe1, "Mark")("Zuckerberg", "Facebook")).to.be("Hey! I'm Mark Zuckerberg from Facebook");
      expect(fn(curryMe1, "Mark", "Zuckerberg")("Facebook")).to.be("Hey! I'm Mark Zuckerberg from Facebook");
      expect(fn(curryMe1, "Mark", "Zuckerberg", "Facebook")()).to.be("Hey! I'm Mark Zuckerberg from Facebook");

      var curryMe2 = function (x, y, z) {
        return x / y * z;
      };

      expect(fn(curryMe2)(12, 3, 5)).to.be(20);
      expect(fn(curryMe2, 12)(3, 5)).to.be(20);
      expect(fn(curryMe2, 12, 3)(5)).to.be(20);
      expect(fn(curryMe2, 12, 3, 5)()).to.be(20);
    });

    it('you should be able to use closure', function () {
      var arr = [54, 2345, 32, 45, 127];
      var doSomeStuff;

      fn = function (vals) {
        // define a function for fn so that the following will pass
      };

      doSomeStuff = function (x) { console.log(x); return x * x; };

      var funcs = fn(arr);
      expect(funcs).to.have.length(5);
      for (var i = funcs.length - 1; i >= 0; i--) {
        expect(funcs[i]()).to.be(doSomeStuff(arr[i]));
      };
    });
  });
});
