exports = typeof window === 'undefined' ? global : window;

exports.logicalOperatorsAnswers = {
  or: function(a, b) {
    return a || b;
  },

  and: function(a, b) {
    return a && b;
  }
};
