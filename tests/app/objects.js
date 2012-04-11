define([ 'use!underscore' ], function(_) {
  describe("objects and context", function() {
    var a, b, C, fn;

    beforeEach(function() {
      fn = function() {};

      a = {
        name : 'Matt',
        greeting : 'Hello',
        sayIt : function() {
          return  this.name + ', ' +
                  this.greeting + '!';
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

    it("should be able to alter the context in which a method runs", function() {
      // define a function for fn so that the following will pass
      expect(fn()).to.be('Yo, Rebecca!');
    });

    it("should be able to alter multiple objects at once", function() {
      // define a function for fn so that the following will pass
      var obj1 = new C('Rebecca'),
          obj2 = new C('Melissa'),
          greeting = "What's up";

      fn(greeting);

      expect(obj1.greeting).to.be(greeting);
      expect(obj2.greeting).to.be(greeting);
      expect(new C('Ellie').greeting).to.be(greeting);
    });

  });
});
