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
    // TODO: add logic for this
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
    // TODO: add logic for this
    return arr;
  },

  square: function(arr) {
    return arr.map(function(item) {
      return item * item;
    });
  },

  findAllOccurrences: function(arr, target) {
    // TODO: add logic for this
    return arr;
  }
};
