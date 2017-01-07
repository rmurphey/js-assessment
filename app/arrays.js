exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item)
  },

  sum: function(arr) {
    var sum = 0;
    for (var i = 0; i<arr.length; i++){
      sum += arr[i];
    }
    return sum;
  },

  remove: function(arr, item) {
    var index;
    for (var i = 0; i<arr.length; i++){
      index = arr.indexOf(item);
      if(index!=-1){
       arr.splice(index, 1);
      }
    }
    return arr;
  },

  removeWithoutCopy: function(arr, item) {

    var index;
    for (var i = 0; i<arr.length; i++){
      index = arr.indexOf(item);
      if(index!=-1){
       arr.splice(index, 1);
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
    var array = arr1.concat(arr2);
    return array;
  },

  insert: function(arr, item, index) {
    arr.splice(index,0,item);
    return arr;
  },

  count: function(arr, item) {
    var count=0;
    for (var i = 0; i<arr.length; i++){
      if (arr[i]==item){
        count++;
      }

    }
    return count;
  },

  duplicates: function(arr) {


    var arrDups = [];
    var arrSeen = [];
    var index = 0;

    console.log("arr1");
    console.log(arr);

    for (var i = 0; i<arr.length; i++){

      index = arr[i];
      delete arr[i];

      console.log("index:"+index);

      for (var p = 0; p<arr.length; p++){
        if (arr[p] == index){
          arrSeen = index;
          console.log("found dup:"+index);
          arrDups.push(index);
          break;
        }
      }  
    }


    console.log("array2");
    console.log(arr);
    console.log(arrDups.sort());
    return arrDups.sort();
    
  },

  square: function(arr) {
    var arrSquare = [];
    for (var i = 0; i<arr.length; i++){
      arrSquare.push(arr[i] * arr[i]);
    }
    return arrSquare;
  },

  findAllOccurrences: function(arr, target) {
    var arrPositions = []
    for (var i = 0; i<arr.length; i++){
      if (arr[i] == target){        
        arrPositions.push(i);
      }
    }
    return arrPositions;
  }
};
