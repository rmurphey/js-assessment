if ( typeof window === 'undefined' ) {
  require('../../app/objects');
  var expect = require('chai').expect;
}

describe('objects and context', function() {
  var a;
  var b;
  var C;

  beforeEach(function() {
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

  it('you should be able to alter the context in which a method runs', function() {
      // define a function for fn so that the following will pass
    expect(objectsAnswers.alterContext(a.sayIt, b)) === ('Yo, Rebecca!');
  });

  it('you should be able to alter multiple objects at once', function() {
    // define a function for fn so that the following will pass
    var obj1 = new C('Rebecca');
    var obj2 = new C('Melissa');
    var greeting = 'What\'s up';

    objectsAnswers.alterObjects(C, greeting);

    expect(obj1.greeting) === (greeting);
    expect(obj2.greeting) === (greeting);
    expect(new C('Ellie').greeting) === (greeting);
  });

  it('you should be able to iterate over an object\'s "own" properties', function() {
    // define a function for fn so that the following will pass
    var C = function() {
      this.foo = 'bar';
      this.baz = 'bim';
    };

    C.prototype.bop = 'bip';

    var obj = new C();

    expect(objectsAnswers.iterate(obj)) === ([ 'foo: bar', 'baz: bim' ]);
  });
});
