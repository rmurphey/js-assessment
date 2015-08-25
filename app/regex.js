exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    return !!str.match(/\d/);
  },

  containsRepeatingLetter : function(str) {
    return !!str.match(/([a-zA-Z])\1/);
  },

  endsWithVowel : function(str) {
    return !!str.match(/[aeiou]$/i);
  },

  captureThreeNumbers : function(str) {
    return (str.match(/\d{3}/) || [false]).pop();
  },

  matchesPattern : function(str) {
    return !!str.match(/^\d{3}-\d{3}-\d{4}$/);
  },
  isUSD : function(str) {
    return !!str.match(/^\$([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(\.[0-9][0-9])?$/);
  }
};
