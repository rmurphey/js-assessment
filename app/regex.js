exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return (/\d/g).test(str);
  },

  containsRepeatingLetter: function(str) {
    return (/([A-Z])\1/ig).test(str);
  },

  endsWithVowel: function(str) {
    return (/^.+[aeiou]$/i).test(str);
  },

  captureThreeNumbers: function(str) {
    var match = (/(\d{3})/).exec(str);

    if (match) {
      return match[1];
    }

    return false;
  },

  matchesPattern: function(str) {
    return (/^\d{3}-\d{3}-\d{4}$/).test(str);
  },

  isUSD: function(str) {
    return (/^\$\d{1,3}(?:,?\d{3})*(?:\.\d{2})?$/).test(str);
  }
};
