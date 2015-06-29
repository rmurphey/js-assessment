if ( typeof window === 'undefined' ) {
  require('../../app/functions');
  var expect = require('chai').expect;
}

describe('functions', function() {
  var string;

  beforeEach(function () {
    string = "launch academy!";
  });

  it('should reverse a string', function(){
    var result = functionAnswers.reverseString(string);

    expect(result).to.eql('!ymedaca hcnual')
  });

  it('should be able to determine the longest substring in a string', function() {
    var result = functionAnswers.longestSubString(string);

    expect(result).to.eql('academy!');
  });

  it('should replace a string of letters with letters that follow them in the alphabet', function() {
    var string1 = "abcdef";
    var string2 = "z3bac";
    var result1 = functionAnswers.letterMoveForward(string);
    var result2 = functionAnswers.letterMoveForward(string2);

    expect(result1).to.eql('bcdefg');
    expect(result2).to.eql('a3cbd');
  });

  it('should capitalize the first letter of each word in a string', function() {
    var result = functionAnswers.capitalizeWords(string);
    expect(result).to.eql('Launch Academy!');
  });

});
