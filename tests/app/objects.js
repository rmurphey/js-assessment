define([ 'use!underscore' ], function(_) {
  describe("objects and context", function() {
    var a, b, C, fn;

    beforeEach(function() {
      fn = function() {};

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

    it("you should be able to alter the context in which a method runs", function() {

      fn = function () {
        return a.sayIt.call(b);
      }

      expect(fn()).to.be('Yo, Rebecca!');
    });

    it("you should be able to alter multiple objects at once", function() {

      C.prototype = a;

      var obj1 = new C('Rebecca'),
          obj2 = new C('Melissa'),
          greeting = "What's up";

      fn = function (greeting) {
        a.greeting = greeting;
      }

      fn(greeting);

      expect(obj1.greeting).to.be(greeting);
      expect(obj2.greeting).to.be(greeting);
      expect(new C('Ellie').greeting).to.be(greeting);
    });

    it("you should be able to iterate over an object's 'own' properties", function() {
      // define a function for fn so that the following will pass
      var C = function() {
        this.foo = 'bar';
        this.baz = 'bim';
      };

      C.prototype.bop = 'bip';

      var obj = new C();

      fn = function (obj) {
        var p, arr = [];
        for (p in obj) {
          if (obj.hasOwnProperty(p)) {
            arr.push(p + ": " + obj[p]);
          }
        }
        return arr;
      }

      expect(fn(obj)).to.eql([ 'foo: bar', 'baz: bim' ]);
    });
  });
});
