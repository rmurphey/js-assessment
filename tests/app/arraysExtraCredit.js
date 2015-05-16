if ( typeof window === 'undefined' ) {
  require('../../app/arraysExraCredit');
  var expect = require('chai').expect;
}

xdescribe('arraysExtraCredit', function() {
  var a;

  /*create an array-like object (sublcass of array) that is missing the methods that
  the user needs to implement */
  var ArrayLike = function() {
    Array.call(this);
  }
  ArrayLike.prototype = Object.create(Array.prototype);
  ArrayLike.prototype.indexOf = undefined;
  ArrayLike.prototype.push = undefined;
  ArrayLike.prototype.pop = undefined;
  ArrayLike.prototype.unshift = undefined;
  ArrayLike.prototype.shift = undefined;
  ArrayLike.prototype.concat = undefined;

  beforeEach(function() {
    a = new ArrayLike();
    a = [ 1, 2, 3, 4 ];
  });

  it('you should be able to implment indexOf from scratch', function() {
    expect(arraysExtraCreditAnswers.indexOf(a, 3)).to.eql(2);
    expect(arraysExtraCreditAnswers.indexOf(a, 5)).to.eql(-1);
  });

  it('you should be able to implement push from scratch', function() {
    var result = arraysExtraCreditAnswers.push(a, 10);

    expect(result).to.eql(5)
    expect(a).to.have.length(5);
    expect(a[a.length - 1]).to.eql(10);
  });

  it('you should be able to implement pop from scratch', function() {
    var result = arraysExtraCreditAnswers.pop(a);

    expect(result).to.eql(4);
    expect(a).to.have.length(3);
    expect(a.join(' ')).to.eql('1 2 3');
  });

  it('you should be able to implement unshift from scratch', function () {
    var result = arraysExtraCreditAnswers.unshift(a, 10);

    expect(result).to.eql(5);
    expect(a).to.have.length(5);
    expect(a[0]).to.eql(10);
  });

  it('you should be able to implement shift from scratch', function () {
    var result = arraysExtraCreditAnswers.shift(a);

    expect(result).to.eql(1);
    expect(a).to.have.length(3);
    expect(a.join(' ')).to.eql('2 3 4');
  });

  it('you should be able to implement concat from scratch', function() {
    var c = [ 'a', 'b', 'c', 1 ];
    var result = arraysExtraCreditAnswers.concat(a, c);

    expect(result).to.have.length(8);
    expect(result.join(' ')).to.eql('1 2 3 4 a b c 1');
  });

});
