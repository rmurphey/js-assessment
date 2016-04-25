if ( typeof window === 'undefined' ) {
  require('../../app/bestPractices');
  var expect = require('chai').expect;
}

describe('best practices', function(){
  it('you should avoid global variables', function() {
    bestPracticesAnswers.globals();
    expect(window.myObject)to.not.be.ok;
	
  });

  it('you should declare functions safely', function() {
    var val = bestPracticesAnswers.functions(true);
    expect(val).to.eql('a');
  });

  it('you should use parseInt correctly', function() {
    expect(bestPracticesAnswers.parseInt('12')) === 12;
    expect(bestPracticesAnswers.parseInt('12px')) === 12;
    expect(bestPracticesAnswers.parseInt('0x12')) === 0;
  });

  it('you should understand strict comparison', function() {
    expect(bestPracticesAnswers.identity(1, '1')) === (false);
    expect(bestPracticesAnswers.identity(1, 1)) === (true);
    expect(bestPracticesAnswers.identity(0, false)) === (false);
  });
});
