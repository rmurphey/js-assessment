if ( typeof window === 'undefined' ) {
  require('../../app/primitives');
  var expect = require('chai').expect;
}

describe('primitives', function() {
  var string;
  var number;
  var _boolean;
  var _null;
  var _undefined;
  var symbol;

  beforeEach(function() {
    string = "launch academy";
    number = 42;
    _boolean = true;
    _null = null;
    _undefined = undefined;
    // symbol = ?
  });

  it('', function() {
    expect(primitivesAnswers.stringFunction(string).to.eql('something'));
  });

  it('you should be able to work with logical or', function() {
    expect(primitivesAnswers.or(false, true)).to.be.ok;
    expect(primitivesAnswers.or(true, false)).to.be.ok;
    expect(primitivesAnswers.or(true, true)).to.be.ok;
    expect(primitivesAnswers.or(false, false)).not.to.be.ok;
    expect(primitivesAnswers.or(3, 4)).to.not.eq(7);
  });

  it('you should be able to work with logical and', function() {
    expect(primitivesAnswers.and(false, true)).not.to.be.ok;
    expect(primitivesAnswers.and(false, false)).not.to.be.ok;
    expect(primitivesAnswers.and(true, false)).not.to.be.ok;
    expect(primitivesAnswers.and(true, true)).to.be.ok;
    expect(primitivesAnswers.and(3, 4)).to.be.ok;
  });

});
