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

  },

  truncate: function(arr) {

  },

  prepend: function(arr, item) {

  },

  curtail: function(arr) {

  },

  concat: function(arr1, arr2) {

  },

  insert: function(arr, item, index) {

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
