exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
      return 1 & (num >> (bit - 1));
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    var arr = [];
    for (var i = 7; i > -1; i--) {
      arr.push( num & (1 << i) ? 1 : 0 );
    }
    return arr.join('');
  },

  multiply: function(a, b) {

  }
};
