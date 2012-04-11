define([ 'use!underscore' ], function(_) {
  describe("objects and context", function() {
    var a, b, fn = function() {};

    beforeEach(function() {
      a = {
        name : 'Matt',
        greeting : 'Hello',
        sayIt : function(preamble, punctuation) {
          return  (preamble || '') +
                  this.name + ', ' +
                  this.greeting +
                  (punctuation || '!');
        }
      };

      b = {
        name : 'Rebecca',
        greeting : 'Yo'
      };
    });

    it("should be able to alter the context in which a function runs", function() {
      fn = function() { };
      expect(fn()).to.be('Yo, Rebecca!');
    });

    it("should be able to pass in arguments stored in an array", function() {
      fn = function() { };
      expect(fn()).to.be('Why Hello, Matt!!!');
    });
  });
});
