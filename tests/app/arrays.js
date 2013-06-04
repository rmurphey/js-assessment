/*globals describe:true, it:true, expect:true, beforeEach:true */
if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define([
  'app/arrays'
], function(answers) {
  describe('陣列', function() {
    var a;

    beforeEach(function() {
      a = [ 1, 2, 3, 4 ];
    });

    it('找到某一元素在陣列中的位置', function() {
      expect(answers.indexOf(a, 3)).to.eql(2);
      expect(answers.indexOf(a, 5)).to.eql(-1);
    });

    it('陣列元素值加總', function() {
      expect(answers.sum(a)).to.eql(10);
    });

    it('從陣列中移除（所有相同的）元素', function() {
      a.push(2); // Make sure the value appears more than one time
      var result = answers.remove(a, 2);

      expect(result).to.have.length(3);
      expect(result.join(' ')).to.eql('1 3 4');
    });

    it('從陣列中移除（所有相同的）元素，且回傳的陣列要與傳入陣列是同一個', function() {
      a.splice( 1, 0, 2 );
      a.push( 2 );
      a.push( 2 );

      var result = answers.removeWithoutCopy(a, 2);

      expect(result).to.have.length(3);
      expect(result.join(' ')).to.eql('1 3 4');

      // make sure that you return the same array instance
      expect(result).equal(a);
    });

    it('在陣列尾端加入元素', function() {
      var result = answers.append(a, 10);

      expect(result).to.have.length(5);
      expect(result[result.length - 1]).to.eql(10);
    });

    it('移除陣列尾端元素', function() {
      var result = answers.truncate(a);

      expect(result).to.have.length(3);
      expect(result.join(' ')).to.eql('1 2 3');
    });

    it('合併兩個陣列', function() {
      var c = [ 'a', 'b', 'c', 1 ],
          result = answers.concat(a, c);

      expect(result).to.have.length(8);
      expect(result.join(' ')).to.eql('1 2 3 4 a b c 1');
    });

    it('在陣列任何位置插入元素', function() {
      var result = answers.insert(a, 'z', 2);

      expect(result).to.have.length(5);
      expect(result.join(' ')).to.eql('1 2 z 3 4');
    });

    it('計算陣列中某一元素出現次數', function() {
      var result = answers.count([ 1, 1, 1, 2, 1, 3 ], 1);

      expect(result).to.eql(4);
    });

    it('找出重複出現的元素', function() {
      var result = answers.duplicates([ 1, 2, 4, 4, 3, 3, 1, 5 ]);

      expect(result).to.have.length(3);
      expect(result.sort().join(' ')).to.eql('1 3 4');
    });

    it('平方陣列中所有元素', function() {
      var result = answers.square(a);

      expect(result).to.have.length(4);
      expect(result.join(' ')).to.eql('1 4 9 16');
    });

    it('找出某一元素在陣列中出現的（所有）位置', function() {
      var result = answers.findAllOccurrences('abcdefabc'.split(''), 'a');

      expect(result.sort().join(' ')).to.eql('0 6');
    });

  });
});
