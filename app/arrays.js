exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for(var i=0; i<arr.length; i++){
      if(arr[i] == item){return i;}
    }
    return -1;
  },

  sum : function(arr) {
    var sum = arr.reduce((a, b) => a + b, 0);
    return sum;
  },

  remove : function(arr, item) {
    var cleanAry = [];
    for(var i=0; i<arr.length; i++){
      if(arr[i]!=item){cleanAry.push(arr[i])}
    }
    return cleanAry;
  },

  removeWithoutCopy : function(arr, item) {
    for(var i=arr.length-1; i>0; i--){
      if(arr[i]==item){arr.splice(i, 1)}
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.splice(arr.length-1, 1);
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
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var counter = 0;
    for(var i=0; i<arr.length; i++) {
      if(arr[i] == item) {counter++;}
    }
    return counter;
  },

  duplicates : function(arr) {
    var dups = arr.filter(function(itm, i){
        return arr.lastIndexOf(itm)== i && arr.indexOf(itm)!= i;
    });
    return dups;
  },

  square : function(arr) {
    return arr.map(function(x) {
      return Math.pow(x, 2);
    });
  },

  findAllOccurrences : function(arr, target) {
    var locations = [];
    for(var i=0; i<arr.length; i++) {
      if(arr[i] == target) {locations.push(i);}
    }
    return locations;
  }
};
