if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    indexOf: function (arr, item) {
      return arr.indexOf(item);
    },

    sum: function (arr) {
      return arr.reduce(function (acc, val) { return acc + val; }, 0);
    },

    remove: function (arr, item) {
      return arr.filter(function (val) { return val !== item; })
    },

    removeWithoutCopy: function (arr, item) {
      var i;
      while ((i = arr.indexOf(item)) !== -1) {
        arr.splice(i, 1);
      }
      return arr;
    },

    append: function (arr, item) {
      arr.push(item)
      return arr;
    },

    truncate: function (arr) {
      arr.splice(arr.length - 1, 1);
      return arr;
    },

    concat: function (arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert: function (arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count: function (arr, item) {
      return arr.reduce(function (acc, val) {
        if (val === item) {
          acc++;
        }
        return acc;
      }, 0);
    },

    duplicates: function (arr) {
      return arr.filter(function (val, index) { return arr.indexOf(val) !== index; });
    },

    square: function (arr) {
      return arr.map(function (n) { return n * n; })
    },

    findAllOccurrences: function (arr, target) {
      return arr.reduce(function (acc, val, index) { return target === val ? acc.concat(index) : acc; }, [])
    }
  };
});
