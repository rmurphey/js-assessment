exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return arr.reduce(function(sum, item){ return sum + item;}, 0);
  },

  remove : function(arr, item) {
    var index;
    while((index = arr.indexOf(item)) >= 0) {
      arr.splice(index, 1);
    }
    return arr;
  },

  removeWithoutCopy : function(arr, item) {
    return this.remove(arr, item);
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    var array = [];
    [].push.apply(array, arr1);
    [].push.apply(array, arr2);
    return array;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    return arr.filter(function(el) { return el === item}).length;
  },

  duplicates : function(arr) {
    var array = [];
    arr.forEach(function(item) {
      if(array.indexOf(item) >= 0) return;
      if(this.count(arr, item) > 1) {
        array.push(item);
      }
    }, this);
    return array;
  },

  square : function(arr) {
    return arr.map(function(item) {
      return Math.pow(item, 2);
    });
  },

  findAllOccurrences : function(arr, target) {
    var array = [];
    var index = -1;
    while((index = arr.indexOf(target, index + 1)) >= 0) {
      array.push(index);
    }
    return array;
  }
};
