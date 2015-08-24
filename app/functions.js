exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(str2) {
      return [str, str2].join(', ');
    };
  },

  makeClosures : function(arr, fn) {
    return arr.map(function(item) {
      return function() {
        return fn(item);
      }
    });
  },

  partial : function(fn, str1, str2) {
    var outerArgs = [].slice.call(arguments, 1);
    return function() {
      var innerArgs = [].slice.call(arguments);
      return fn.apply(this, outerArgs.concat(innerArgs));
    };
  },

  useArguments : function() {
    var args = [].slice.call(arguments);
    return args.reduce(function(sum, number) {
      return sum+number;
    }, 0);
  },

  callIt : function(fn) {
    var outerArgs = [].slice.call(arguments, 1);
    return fn.apply(this, outerArgs);
  },

  partialUsingArguments : function(fn) {
    return this.partial.apply(this, arguments);
  },

  curryIt : function(fn) {
    var args = [];

    return function c(val) {
      if(arguments.length) {
        args.push.apply(args, arguments);
      }

      if(args.length === fn.length) {
        return fn.apply(this, args);
      } else {
        return c;
      }
    };
  }
};
