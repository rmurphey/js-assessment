exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for( i = 0; i < arr.length; i++){
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },

  sum: function(arr) {
    var sum = 0
    for (i = 0; i < arr.length; i++){
      sum += arr[i];
    }
    return sum;
  },

  remove: function(arr, item) {
    var remove = [];
    for (var i = 0; i < arr.length; i++){
      if (arr[i] !== item) {
        remove.push(arr[i]);
      }
    }
    return remove;
  },

  removeWithoutCopy: function(arr, item) {
    var i

    for (var i = 0; i < arr.length; i++){
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
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
    var count = 0;
    for (let i = 0; i < arr.length; i++){
      if (arr[i] === item)
      count++;
    }
    return count;
  },

  duplicates: function(arr) {
    let exists = [];
    let doubles = [];
    for (i = 0;i < arr.length;i++){
      if(exists.indexOf(arr[i]) === -1){
      exists.push(arr[i]);
    } else if (doubles.indexOf(arr[i])=== -1){
      doubles.push(arr[i]);
      }
    }
    return doubles;
  },

  square: function(arr) {
    var squares = [];

    for (i = 0;i < arr.length;i++){
      squares.push(Math.pow(arr[i],2));
    }
  return squares;
  },

  findAllOccurrences: function(arr, target) {
    var occurences = [], i;
    for(i = 0; i < arr.length; i++)
        if (arr[i] === target)
            occurences.push(i);
    return occurences;
  }
};
