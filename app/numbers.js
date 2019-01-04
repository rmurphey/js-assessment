exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    // TODO: add logic for this
    return num;
  },

  base10: function(str) {
    // TODO: add logic for this
    return str;
  },

  convertToBinary: function(num) {
    // TODO: add logic for this
    return num;
  },

  multiply: function(a, b) {
    var parsedA = a.toString().split('.');
    var parsedB = b.toString().split('.');

    var aPrecision = 0;
    var bPrecision = 0;

    if (parsedA.length > 1) {
      aPrecision = parsedA[1].length;
    }

    if (parsedB.length > 1) {
      bPrecision = parsedB[1].length;
    }

    var precision = Math.max(aPrecision, bPrecision);

    return parseFloat((a * b).toFixed(precision));
  }
};
