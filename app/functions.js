exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function (string) {
      return str + ', ' + string;
    };
  },

  makeClosures: function(arr, fn) {
    // TODO: add logic for this
    return arr;
  },

  partial: function(fn, str1, str2) {
    // TODO: add logic for this
    return fn;
  },

  useArguments: function() {
    var args = [...arguments];

    return args.reduce(function(total, item) {
      return total + item;
    }, 0);
  },

  callIt: function(fn) {
    var args = [...arguments];

    return fn.apply(this, args.slice(1));
  },

  partialUsingArguments: function(fn) {
    // TODO: add logic for this
    return fn;
  },

  curryIt: function(fn) {
    // TODO: add logic for this
    return fn;
  }
};
