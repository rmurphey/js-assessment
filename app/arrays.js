exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for ( var i = 0, j = arr.length; i < j; i++) {
      if (arr[i] === item){
        return i;
      }
    }

    return -1;
  },

  sum: function(arr) {
    var suma = 0;

    for (var i = 0, j = arr.length; i < j; i++){
      suma += arr[i];
    }
    return suma;
  },

  remove: function(arr, item) {

    var remover = [];

    for (var i = 0, j = arr.length; i < j; i++){
      if (arr[i] !== item){
        remover.push(arr[i]);
      }
  }
    return remover;
  },

  removeWithoutCopy: function(arr, item) {

  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return(arr);
  },

  curtail: function(arr) {
    arr.shift(arr);
    return(arr);
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return(arr);
  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
