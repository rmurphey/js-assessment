exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    // TODO: add logic for this
    return str;
  },

  wordWrap: function(str, cols) {
    // TODO: add logic for this
    return str;
  },

  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
