exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      } 
    }
    return -1;
  },

  sum : function(arr) {
   arr.reduce(function(a,b) {
    sum = a + b;
    return sum;
   });
   return sum;
  },

  remove : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (item === arr[i]) {
          arr.splice(i, 1);
      }
    }
    return arr;
  },

  removeWithoutCopy : function(arr, item) {
    for (var i = arr.length - 1; i > 0; i--){
      if (item === arr[i]) {
        arr.splice(i, 1);
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
    arr.shift()
    return arr;
  },

  concat : function(arr1, arr2) {
    var a = arr1.concat(arr2);
    return a;
  },

  insert : function(arr, item, index) {
    arr.splice(index ,0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
      if (item === arr[i]) {
        count++;
      }
    }
    return count;
  },

  duplicates : function(arr) {
    var result = [];
    var dupes = {};
    var sortArr = arr.sort();
    
    for (var i = 0; i < sortArr.length; i++) {
      if (sortArr[i] === sortArr[i+1]) {
        dupes[sortArr[i]] = sortArr[i]; 
        }
      }
      
    for (var k in dupes) {
      result.push(dupes[k]);
    }
    return result;  
  },

  square : function(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      result.push(Math.pow(arr[i],2));
    }
    return result;
  },

  findAllOccurrences : function(arr, target) {
    var result = [];
    index = arr.indexOf(target);
    while (index != -1) {
      result.push(index);
      index = arr.indexOf(target, index + 1);
    }
  return result; 
  }
};
