if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(this, arr);
    },

    speak : function(fn, obj) {    

    },

    functionFunction : function(str) {
        return function(str2){
            return str + ', ' + str2; 
        }
    },

    makeClosures : function(arr, fn) {
        var finalArr = [];
        for (var i = 0; i < arr.length; i++) {
            var result = fn(arr[i]);
            finalArr[i] = function(){ return  result;};
        }
        return finalArr;
    },

    partial : function(fn, str1, str2) {
        return function(str3){
            return fn(str1, str2, str3);
        }
    },

    useArguments : function() {
        var solution = 0;
        for (i = 0; i < arguments.length; i++) {
            solution += arguments[i];
        }
        return solution;
    },

    callIt : function(fn) {
        var parameters = [];
        for (i = 1; i < arguments.length; i++) {
            parameters.push(arguments[i]);
        }
        return fn.apply(this, parameters);
    },

    partialUsingArguments : function(fn) {
        var parameters = [];
        for (i = 1; i < arguments.length; i++) {
            parameters.push(arguments[i]);
        }
        return function(arg1, arg2, arg3){
            for (i = 0; i < arguments.length; i++) {
                parameters.push(arguments[i]);
            }
            return fn.apply(this, parameters);
        }
    },

    curryIt : function(fn) {

    }
  };
});
