if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
       for(var i = 0; i < arr.length; i++) {
         if(arr[i] === item) {
             return i;
         }
       }
       return -1
    },

    sum : function(arr) {
      var total = 0;
      for(var i = 0; i < arr.length; i++){
         total += arr[i]
      }
      return total
    },

    remove : function(arr, item) {
      var remove = [];
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== item) {
            remove.push(arr[i]);
        }
      }
      return remove;


// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2,2);
// Banana,Orange

    },

    removeWithoutCopy : function(arr, item) {

    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
       arr.pop();
       return arr
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
       arr.splice(0,1);
       return arr;
    },

    concat : function(arr1, arr2) {
        var newArray =arr1.concat(arr2);
        return newArray;
    },

    insert : function(arr, item, index) {
        // fruits.splice(2,0,"Lemon","Kiwi")
        arr.splice(index, 0, item);
        return arr;

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
