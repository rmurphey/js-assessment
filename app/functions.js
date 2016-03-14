exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(arg) {
      return str + ', ' + arg;
    };
  },

  makeClosures : function(arr, fn) {
    var newArr = [];

    var makeFn = function(val) {
      return function() { return fn(val); };
    };

    for (var i = 0; i < arr.length; i++) {
      newArr.push(makeFn(arr[i]));
    }

    return newArr;
  },

  partial : function(fn, str1, str2) {
    return function(str3) {
      return fn.call(null, str1, str2, str3);
    };
  },

  useArguments : function() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  },

  callIt : function(fn) {

  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
