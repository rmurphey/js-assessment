exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return (num >> (bit - 1)) & 1; // cut all bits gt 1
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    var binary = num.toString(2);
    var prefixLength = 8 - (binary.length%8 || 8);
    return '0'.repeat(prefixLength) + binary;
  },

  multiply: function(a, b) {
    var aNumerator = a > 1 ? a : 1;
    var aDenumerator = a > 1? 1: 1/a;
    var bNumerator = b > 1 ? b : 1;
    var bDenumerator = b > 1? 1: 1/b;

    return aNumerator * bNumerator / (aDenumerator * bDenumerator);
  }
};
