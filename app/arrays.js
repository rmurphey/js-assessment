exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      } 
    }
    return -1;
  },

  sum : function(arr) {
   arr.reduce(function(a,b) {
    sum = a + b;
    return sum;
   });
   return sum;
  },

  remove : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (item === arr[i]) {
          arr.splice(i,1);
      }
    }
    return arr;
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
    _.each(arr, function(x) { 
      Math.pow(x,2);     
      // console.log(x);
       });
    
  },

  findAllOccurrences : function(arr, target) {

  }
};
