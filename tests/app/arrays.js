/*globals describe:true, it:true, expect:true, beforeEach:true */
if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define([
  'app/arrays'
], function(answers) {
  describe('arrays', function() {
    var a;

    beforeEach(function() {
      a = [ 1, 2, 3, 4 ];
    });

    it('you should be able to determine the location of an item in an array', function() {
      expect(answers.indexOf(a, 3)).to.eql(2);
      expect(answers.indexOf(a, 5)).to.eql(-1);
    });

    it('you should be able to add the values of an array', function() {
      expect(answers.sum(a)).to.eql(10);
    });

    it('you should be able to remove a value from an array', function() {
      a.push(2); // Make sure the value appears more than one time
      var result = answers.remove(a, 2);

      expect(result).to.have.length(3);
      expect(result.join(' ')).to.eql('1 3 4');
    });

    it('you should be able to remove a value from an array, returning the original array', function() {
      a.splice( 1, 0, 2 );
      a.push( 2 );
      a.push( 2 );

      var result = answers.removeWithoutCopy(a, 2);

      expect(result).to.have.length(3);
      expect(result.join(' ')).to.eql('1 3 4');

      // make sure that you return the same array instance
      expect(result).equal(a);
    });

    it('you should be able to add an item to the end of an array', function() {
      var result = answers.append(a, 10);

      expect(result).to.have.length(5);
      expect(result[result.length - 1]).to.eql(10);
    });

    it('you should be able to remove the last item of an array', function() {
      var result = answers.truncate(a);

      expect(result).to.have.length(3);
      expect(result.join(' ')).to.eql('1 2 3');
    });

    it('you should be able to add an item to the beginning of an array', function () {
      var result = answers.prepend(a, 10);

      expect(result).to.have.length(5);
      expect(result[0]).to.eql(10);
    });

    it('you should be able to remove the first item of an array', function () {
      var result = answers.curtail(a);

      expect(result).to.have.length(3);
      expect(result.join(' ')).to.eql('2 3 4');
    });

    it('you should be able to join together two arrays', function() {
      var c = [ 'a', 'b', 'c', 1 ],
          result = answers.concat(a, c);

      expect(result).to.have.length(8);
      expect(result.join(' ')).to.eql('1 2 3 4 a b c 1');
    });

    it('you should be able to add an item anywhere in an array', function() {
      var result = answers.insert(a, 'z', 2);

      expect(result).to.have.length(5);
      expect(result.join(' ')).to.eql('1 2 z 3 4');
    });

    it('you should be able to count the occurences of an item in an array', function() {
      var result = answers.count([ 1, 1, 1, 2, 1, 3 ], 1);

      expect(result).to.eql(4);
    });

    it('you should be able to find duplicates in an array', function() {
      var result = answers.duplicates([ 1, 2, 4, 4, 3, 3, 1, 5, 3 ]);

      expect(result).to.have.length(3);
      expect(result.sort().join(' ')).to.eql('1 3 4');
    });

    it('you should be able to square each number in an array', function() {
      var result = answers.square(a);

      expect(result).to.have.length(4);
      expect(result.join(' ')).to.eql('1 4 9 16');
    });

    it('you should be able to find all occurrences of an item in an array', function() {
      var result = answers.findAllOccurrences('abcdefabc'.split(''), 'a');

      expect(result.sort().join(' ')).to.eql('0 6');
    });

  });
});
