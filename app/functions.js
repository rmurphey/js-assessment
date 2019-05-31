if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    argsAsArray: function (fn, arr) {
      return fn.apply(null, arr);
    },

    speak: function (fn, obj) {
      return fn.call(obj);
    },

    functionFunction: function (str1) {
      return function (str2) {
        return str1 + ', ' + str2;
      }
    },

    makeClosures: function (arr, fn) {
      return arr.map(function (val) { return function () { return fn(val); } });
    },

    partial: function (fn, str1, str2) {
      return function () { return fn.bind(null, str1, str2).apply(null, arguments); };
    },

    useArguments: function () {
      return Array.from(arguments).reduce(function (acc, val) { return acc + val }, 0);
    },

    callIt: function (fn, ...rest) {
      return fn.apply(null, rest);
    },

    partialUsingArguments: function (fn, ...rest) {
      return function () {
        return fn.apply(null, Array.from(rest).concat(Array.from(arguments)));
      };
    },

    curryIt: function (fn) {
      return function (a) {
        return function (b) {
          return function (c) {
            return fn(a, b, c);
          }
        }
      }
    }
  };
});
