exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },

  sum: function(arr) {
    return arr.reduce((acc, item) => {
      return (acc += item);
    }, 0);
  },

  remove: function(arr, item) {
    let length = arr.length;

    for (let i = 0; i < length - 1; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i -= 1;
      }
    }
    return arr;
  },

  removeWithoutCopy: function(arr, item) {
    let length = arr.length;

    for (let i = 0; i < length - 1; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i -= 1;
      }
    }
    return arr;
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
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    let count = 0;

    arr.forEach(current => {
      if (current === item) {
        count++;
      }
    });

    return count;
  },

  duplicates: function(arr) {
    let whatever = [];
    let duplicates = [];
    arr.map(item => {
      if (whatever.includes(item) && !duplicates.includes(item)) {
        return duplicates.push(item);
      } else {
        return whatever.push(item);
      }
    });
    return duplicates;
  },

  square: function(arr) {
    return arr.map(item => item * item);
  },

  findAllOccurrences: function(arr, target) {
    let length = arr.length;

    let indices = [];

    for (let i = 0; i < length - 1; i++) {
      if (arr[i] === target) {
        indices.push(i);
      }
    }
    return indices;
  }
};
