exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },

  sum: function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  },

  remove: function(arr, item) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== item) {
        result.push(arr[i]);
      }
    }
    return result;
  },

  removeWithoutCopy: function(arr, item) {
    var occurences = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item ) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.splice(arr.length, 1, item);
    return arr;
  },

  truncate: function(arr) {
    arr.splice(-1, 1);
    return arr;
  },

  prepend: function(arr, item) {
    arr.splice(0, -1, item);
    return arr;
  },

  curtail: function(arr) {
    arr.splice(0, 1);
    return arr;
  },

  concat: function(arr1, arr2) {
    for (var i = 0; i < arr2.length; i++) {
      arr1.push(arr2[i]);
    }
    return arr1;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        count++;
      }
    }
    return count;
  },

  // ripe for rewrite
  duplicates: function(arr) {
    var duplicates = [];
    for (var i = 0; i < arr.length; i++) {
      for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j] && !duplicates.includes(arr[j])) {
          duplicates.push(arr[i]);
        }
      }
    }
    return duplicates;
  },

  square: function(arr) {
    var squared = arr.map(function(number) {
      return Math.pow(number, 2);
    });
    return squared;
  },

  findAllOccurrences: function(arr, target) {
    var news = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        news.push(i);
      }
    }
    return news;
  }
};
