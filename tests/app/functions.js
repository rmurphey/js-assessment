if ( typeof window === 'undefined' ) {
  require('../../app/functions');
  var expect = require('chai').expect;
}

describe('functions', function() {

  it('should return true or false based on a number being prime', function() {
    var _true = functionAnswers.isPrime(5);
    var _false = functionAnswers.isPrime(100);
    expect(_true).to.eql(true);
    expect(_false).to.eql(false);
  });

  it('should return the sum of all elements of an array of numbers', function() {
    var array1 = [1, 2, 3, 4, 5];
    var array2 = [-5, 0, 5];
    var result1 = functionAnswers.arraySum(array1);
    var result2 = functionAnswers.arraySum(array2);

    expect(result1).to.eql(15);
    expect(result2).to.eql(0);
  });

  it('it returns \'fizz\' if input is divisible by 3, \'buzz\' if 5, \'fizzbuzz\' if 15, else the input', function() {
    var num = 0;

    while (num % 3 === 0 || num % 5 === 0) {
      num = Math.floor(Math.random() * 10) + 1;
    }

    expect(functionAnswers.fizzBuzz()).not.to.be.ok;
    expect(functionAnswers.fizzBuzz('foo')).not.to.be.ok;
    expect(functionAnswers.fizzBuzz(2)).to.eql(2);
    expect(functionAnswers.fizzBuzz(101)).to.eql(101);

    expect(functionAnswers.fizzBuzz(3)).to.eql('fizz');
    expect(functionAnswers.fizzBuzz(6)).to.eql('fizz');
    expect(functionAnswers.fizzBuzz(num * 3)).to.eql('fizz');

    expect(functionAnswers.fizzBuzz(5)).to.eql('buzz');
    expect(functionAnswers.fizzBuzz(10)).to.eql('buzz');
    expect(functionAnswers.fizzBuzz(num * 5)).to.eql('buzz');

    expect(functionAnswers.fizzBuzz(15)).to.eql('fizzbuzz');
    expect(functionAnswers.fizzBuzz(num * 3 * 5)).to.eql('fizzbuzz');
  });

});
