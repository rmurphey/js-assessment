define([ 'use!underscore' ], function(_) {
  describe("the module pattern", function() {
    var fn = function() {};

    it("you should be able to create a function that returns a module", function() {

      var Person = function (greeting, name) {
        this.greeting = greeting;
        this.name = name;
      };

      Person.prototype.greeting = "Hi";
      Person.prototype.name = "Bob";
      Person.prototype.sayIt = function () {
        return this.greeting + ", " + this.name;
      }

      fn = function(greeting, name) {
        return new Person(greeting, name);
      };

      var module = fn('hello', 'matt');
      expect(module.name).to.be.ok();
      expect(module.greeting).to.be.ok();
      expect(module.sayIt).to.be.a('function');
      expect(module.sayIt()).to.be('hello, matt');
    });
  });
});
