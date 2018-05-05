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
    const newArray = arr;
    newArray.shift();

    return newArray;
  },

  concat: function(arr1, arr2) {
    const newArray = arr1.concat(arr2);

    return newArray;
  },

  insert: function(arr, item, index) {
    const newArray = arr;
    newArray.splice(index, 0, item);

    return newArray;
  },

  count: function(arr, item) {
    const total = arr.filter(ele => ele === item);

    return total.length;
  },

  duplicates: function(arr) {
    const newArray = arr;
    const sorted = arr.sort((a, b) => a - b);
    let value;
    const array = [];

    for (i=0; i<sorted.length-1; i++) {
      if(value === sorted[i]) {
        array.push(sorted[i]);
        return;
      }
      value = sorted[i];
      return;
    }

    return array;
  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
