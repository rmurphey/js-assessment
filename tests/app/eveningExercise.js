if ( typeof window === 'undefined' ) {
  require('../../app/eveningExercise');
  var expect = require('chai').expect;
}

describe('evening exercise', function() {
  var a;
  var string;

  beforeEach(function() {
    a = [ 1, 2, 3, 4 ];
  });

  beforeEach(function () {
    string = "launch academy!";
  });

  it('you should be able to determine the location of an item in an array', function() {
    expect(eveningExerciseAnswers.indexOf(a, 3)).to.eql(2);
    expect(eveningExerciseAnswers.indexOf(a, 5)).to.eql(-1);
  });

  it('you should be able to add the values of an array', function() {
    expect(eveningExerciseAnswers.sum(a)).to.eql(10);
  });

  it('you should be able to remove all instances of a value from an array', function() {
    a.push(2); // Make sure the value appears more than one time
    var result = eveningExerciseAnswers.remove(a, 2);

    expect(result).to.have.length(3);
    expect(result.join(' ')).to.eql('1 3 4');
  });

  it('should reverse a string', function(){
    var result = eveningExerciseAnswers.reverseString(string);

    expect(result).to.eql('!ymedaca hcnual')
  });

  it('should be able to determine the longest substring in a string', function() {
    var result = eveningExerciseAnswers.longestSubString(string);

    expect(result).to.eql('academy!');
  });

  it('should replace a string of letters with letters that follow them in the alphabet', function() {
    var string1 = "abcdef";
    var string2 = "z3bac";
    var result1 = eveningExerciseAnswers.letterMoveForward(string1);
    var result2 = eveningExerciseAnswers.letterMoveForward(string2);

    expect(result1).to.eql('bcdefg');
    expect(result2).to.eql('a3cbd');
  });

  it('should capitalize the first letter of each word in a string', function() {
    var result = eveningExerciseAnswers.capitalizeWords(string);
    expect(result).to.eql('Launch Academy!');
  });

});
