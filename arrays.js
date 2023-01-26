exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function (arr, item) {
    for (var i = 0, b = arr.length; i < b; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },

  sum: function (arr) {
    let sum = 0;

    for (var i = 0, b = arr.length; i < b; i++) {
      sum += arr[i];
    }
    return sum;
  },

  remove: function (arr, item) {

  },

  removeWithoutCopy: function (arr, item) {

  },

  append: function (arr, item) {
    arr.push(item)
    return arr
  },

  truncate: function (arr) {
    arr.pop()
    return arr
  },

  prepend: function (arr, item) {
    arr.unshift(item)
    return arr
  },

  curtail: function (arr) {
    arr.unshift()
    return arr
  },

  concat: function (arr1, arr2) {
    return arr1.concat(arr2)
  },

  insert: function (arr, item, index) {
    arr.splice(index,0,item)
    return arr
  },

  count: function (arr, item) {
    let value = 0
    
    for (var i = 0, b = arr.length; i < b; i++) {
      if (arr[i] === item) {
        value++
      }
    }
    return value
  },

  duplicates: function (arr) {

  },

  square: function (arr) {
    let sq = []

    for (var i = 0, b = arr.length; i < b; i++) {
      sq.push(arr[i]*arr[i])
    }
    return sq
  },

  findAllOccurrences: function (arr, target) {
    let dupes = []

    for (var i = 0, b = arr.length; i < b; i++) {
      if (arr[i]===target) {
        dupes.push(i)
      }
    }
    return dupes
  }
};
