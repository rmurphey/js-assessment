exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for(var i=0; i<arr.length; i++){
      if(arr[i] == item){return i;}
    }
    return -1;
  },

  sum : function(arr) {
    var sum = arr.reduce((a, b) => a + b, 0);
    return sum;
  },

  remove : function(arr, item) {
    let index = this.indexOf(arr, item);
    while(index > -1) {
      arr.splice(index, 1);
      index = this.indexOf(arr, item);
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

  },

  findAllOccurrences : function(arr, target) {

  }
};
