exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    var result = -1;
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === item){
        result = i;
      }
    }
    return result;
  },

  sum : function(arr) {
    var result = 0; 
    arr.forEach(function(number){
      result += number;
    });
    return result;
  },

  remove : function(arr, item) {
    var removed = [];
    for(var i = 0; i < arr.length; i++){
      if(arr[i] !== item){
        removed.push(arr[i]);
      }
    }
    return removed;
  },

  removeWithoutCopy : function(arr, item) {
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === item){
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
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
