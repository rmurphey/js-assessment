exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce(function(total, item) {
      return total + item;
    }, 0);
  },

  remove: function(arr, item) {
    return arr.filter(function(element) {
      return element !== item;
    });
  },

  removeWithoutCopy: function(arr, item) {
    while (arr.indexOf(item) !== -1) {
      arr.splice(arr.indexOf(item), 1);
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
    return [...arr1, ...arr2];
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);

    return arr;
  },

  count: function(arr, item) {
    return arr.filter(function(element) {
      return element === item;
    }).length;
  },

  duplicates: function(arr) {
    const duplicates = [];

    arr.forEach((item, index, array) => {
      if (array.indexOf(item, index + 1) !== -1 && duplicates.indexOf(item) === -1) {
        duplicates.push(item);
      }
    });

    return duplicates;
  },

  square: function(arr) {
    return arr.map(function(item) {
      return item * item;
    });
  },

  findAllOccurrences: function(arr, target) {
    const occurences = [];

    arr.forEach((item, index) => {
      if (item === target) {
        occurences.push(index);
      }
    });

    return occurences;
  }
};
