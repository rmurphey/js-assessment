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
    return arr.map((item) => {
      return () => fn(item);
    });
  },

  partial: (fn, str1, str2) => (str) => fn(str1, str2, str),

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

  partialUsingArguments: (fn, ...args) => (...args2) => fn(...args, ...args2),

  curryIt: function(fn) {
    // TODO: I hate currying
    return fn();
  }
};
