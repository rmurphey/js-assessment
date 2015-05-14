exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    var result = -1;
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === item){
        result = i;
      }
    }
    return result;
  },

  sum : function(arr) {
    var result = 0; 
    arr.forEach(function(number){
      result += number;
    });
    return result;
  },

  remove : function(arr, item) {
    var removed = [];
    for(var i = 0; i < arr.length; i++){
      if(arr[i] !== item){
        removed.push(arr[i]);
      }
    }
    return removed;
  },

  removeWithoutCopy : function(arr, item) {
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === item){
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
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
    var results = [];
    for(var i = 0; i < arr1.length; i++){
      results.push(arr1[i]);
    }
    for(var b = 0; b < arr2.length; b++){
      results.push(arr2[b]);
    }
    return results;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0;
    arr.forEach(function(number){
      if (number === item){
        count += 1;
      }
    });
    return count;
  },

  duplicates : function(arr) {

  },

  square : function(arr) {
    var sq = [];
    arr.forEach(function(number){
      sq.push(number * number);
    });
    return sq;
  },

  findAllOccurrences : function(arr, target) {
    var place = [];
    for(var i = 0; i < arr.length; i++){
      if(target === arr[i]){
        place.push(i);
      }
    }
    return place; 
  }
};
