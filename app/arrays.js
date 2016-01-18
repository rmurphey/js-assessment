exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce(function(pv, cv) {
      return pv + cv;
    });
  },

  remove: function(arr, item) {
    for (var i in arr) {
      if (arr[i] == item) {
        arr.splice(i, 1)
      }

    };
    return arr;
  },

  removeWithoutCopy: function(arr, item) {
    for (var i in arr) {
      if (arr[i] == item) {
        arr.splice(i, 1)
      }

    };
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
    var count = arr.reduce(function(n, val) {
      return n + (val === item);
    }, 0);
    return count;
  },

  duplicates: function(arr) {
    uniqueArray = arr.filter(function(item, pos) {
      return arr.indexOf(item) == pos || item;
    })
    return uniqueArray;
  },

  square: function(arr) {
    return arr.map(function(num) {
      return num * num;
    })
  },

  findAllOccurrences: function(arr, target) {
    console.log(arr);
    var indices = [];
    var idx = arr.indexOf(target);

    while (idx != -1) {
      indices.push(idx);
      idx = arr.indexOf(target, idx + 1);
    }
    return indices;
  }
};