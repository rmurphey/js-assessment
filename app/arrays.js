if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      var index = -1;
      for (i = 0; i < arr.length; i++) {
            if(arr[i] == item)
                index = i;
      }
      return index;
    },

    sum : function(arr) {
        var sum = 0;
        for (i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    },

    remove : function(arr, item) {
        var arraySol = [];
         for (i = 0; i < arr.length; i++) {
            if(arr[i] != item)
                arraySol.push(arr[i]);
        }
        return arraySol;
    },

    removeWithoutCopy : function(arr, item) {

    },

    append : function(arr, item) {

    },

    truncate : function(arr) {

    },

    prepend : function(arr, item) {

    },

    curtail : function(arr) {

    },

    concat : function(arr1, arr2) {

    },

    insert : function(arr, item, index) {

    },

    count : function(arr, item) {

    },

    duplicates : function(arr) {

    },

    square : function(arr) {

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
