exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce((accu, ele) => {
      accu += ele;

      return accu;
    }, 0)
  },

  remove: function(arr, item) {
    return arr.filter(ele => ele !== item)
  },

  removeWithoutCopy: function(arr, item) {

    return arr.filter(ele => ele === item)
  },

  append: function(arr, item) {
    const newArray = arr;
    newArray.push(item);

    return newArray;
  },

  truncate: function(arr) {
    const newArray = arr;
    newArray.pop();

    return newArray;
  },

  prepend: function(arr, item) {
    const newArray = arr;
    newArray.unshift(item);

    return newArray;
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
