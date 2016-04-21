if ( typeof window === 'undefined' ) {
  require('../../app/regex');
  var expect = require('chai').expect;
}

describe('regular expressions', function() {
  it('you should be able to detect a number in a string', function() {
    expect(regexAnswers.containsNumber('abc123')) === (true);
    expect(regexAnswers.containsNumber('abc')) === (false);
  });

  it('you should be able to detect a repeating letter in a string', function() {
    expect(regexAnswers.containsRepeatingLetter('bookkeeping')) === (true);
    expect(regexAnswers.containsRepeatingLetter('rattler')) === (true);
    expect(regexAnswers.containsRepeatingLetter('ZEPPELIN')) === (true);
    expect(regexAnswers.containsRepeatingLetter('cats')) === (false);
    expect(regexAnswers.containsRepeatingLetter('l33t')) === (false);
  });

  it('you should be able to determine whether a string ends with a vowel (aeiou)', function() {
    expect(regexAnswers.endsWithVowel('cats')) === (false);
    expect(regexAnswers.endsWithVowel('gorilla')) === (true);
    expect(regexAnswers.endsWithVowel('I KNOW KUNG FU')) === (true);
  });

  it('you should be able to capture the first series of three numbers', function() {
    expect(regexAnswers.captureThreeNumbers('abc123')) === ('123');
    expect(regexAnswers.captureThreeNumbers('9876543')) === ('987');
    expect(regexAnswers.captureThreeNumbers('abcdef')) === (false);
    expect(regexAnswers.captureThreeNumbers('12ab12ab')) === (false);
  });

  it('you should be able to determine whether a string matches a pattern', function() {
    // the pattern is XXX-XXX-XXXX where all X's are digits
    expect(regexAnswers.matchesPattern('800-555-1212')) === (true);
    expect(regexAnswers.matchesPattern('451-933-7899')) === (true);
    expect(regexAnswers.matchesPattern('33-444-5555')) === (false);
    expect(regexAnswers.matchesPattern('abc-def-hijk')) === (false);
    expect(regexAnswers.matchesPattern('1800-555-1212')) === (false);
    expect(regexAnswers.matchesPattern('800-555-12121')) === (false);
    expect(regexAnswers.matchesPattern('800-5555-1212')) === (false);
    expect(regexAnswers.matchesPattern('800-55-1212')) === (false);
  });

  it('you should be able to detect correctly-formatted monetary amounts in USD', function() {
    expect(regexAnswers.isUSD('$132.03')) === (true);
    expect(regexAnswers.isUSD('$32.03')) === (true);
    expect(regexAnswers.isUSD('$2.03')) === (true);
    expect(regexAnswers.isUSD('$1,023,032.03')) === (true);
    expect(regexAnswers.isUSD('$20,933,209.93')) === (true);
    expect(regexAnswers.isUSD('$20,933,209')) === (true);
    expect(regexAnswers.isUSD('$459,049,393.21')) === (true);
    expect(regexAnswers.isUSD('34,344.34')) === (false);
    expect(regexAnswers.isUSD('$,344.34')) === (false);
    expect(regexAnswers.isUSD('$34,344.3')) === (false);
    expect(regexAnswers.isUSD('$34,344.344')) === (false);
    expect(regexAnswers.isUSD('$34,344_34')) === (false);
    expect(regexAnswers.isUSD('$3,432,12.12')) === (false);
    expect(regexAnswers.isUSD('$3,432,1,034.12')) === (false);
    expect(regexAnswers.isUSD('4$3,432,034.12')) === (false);
  });
});
