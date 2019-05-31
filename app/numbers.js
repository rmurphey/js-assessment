if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    valueAtBit: function (num, bit) {
      return 1 & num >> (bit - 1);
    },

    base10: function (str) {
      return parseInt(str, 2);
    },

    convertToBinary: function (num) {
      var BINARY = 2;
      var LENGTH = 8;
      var binaryString = [];

      while (num) {
        var remainder = num % BINARY;

        num = parseInt(num / BINARY);
        binaryString.push(remainder);
      }
      // padding zero
      while (binaryString.length < LENGTH) {
        binaryString.push('0')
      }

      return binaryString.reverse().join('');
    },

    multiply: function (a, b) {
      return Number((a * b).toFixed(4));
    }
  };
});

