exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    if (arr.length === 0) {
      return -1;
    }

    var counter = 0;

    while(counter < arr.length) {
      if (arr[counter] === item) {
        return counter;
      }

      counter++;
    }

    return -1;
  },

  sum : function(arr) {
    if (!arr) {
      throw new ReferenceError('No array is defined!');
    }

    var sum = 0;

    for (var i = 0, arrLength = arr.length; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
  },

  remove : function(arr, item) {
    if (!arr) {
      throw new ReferenceError('No array is defined!');
    }

    if (!item) {
      throw new ReferenceError('No item to delete is defined!');
    }

    var resultArray = [];

    arr.forEach(function (current, index, array) {
      if (current !== item) {
        resultArray.push(current);
      }
    });

    return resultArray;
  },

  removeWithoutCopy : function(arr, item) {
    if (!arr) {
      throw new ReferenceError('No array is defined!');
    }

    if (!item) {
      throw new ReferenceError('No item to delete is defined!');
    }

    for(var i = arr.length; i--;) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    }

    return arr;
  },

  append : function(arr, item) {
    if (!arr) {
      throw new ReferenceError('No array is defined!');
    }

    if (!item) {
      throw new ReferenceError('No item to delete is defined!');
    }

    arr[arr.length] = item;

    return arr;
  },

  truncate : function(arr) {
    if (!arr) { throw new ReferenceError('No array is defined!'); }

    arr.splice(arr.length - 1, 1);

    return arr;
  },

  prepend : function(arr, item) {
    var result = [];

    result[0] = item;

    for (var i = 1, arrLength = arr.length; i <= arrLength; i++) {
      result[i] = arr[i - 1];
    }

    return result;
  },

  curtail : function(arr) {
    arr.splice(0, 1);

    return arr;
  },

  concat : function(arr1, arr2) {
    var firstArrLength = arr1.length,
      secondArrLength = arr2.length;

    var result = [];

    for (var i = firstArrLength, count = 0; count < secondArrLength; i++, count++) {
      arr1[i] = arr2[count];
    }

    return arr1;
  },

  insert : function(arr, item, index) {
    var firstArr = arr.slice(0, index),
      secondArr = arr.slice(index);

    firstArr[index] = item;

    return this.concat(firstArr, secondArr);
    /*arr.splice(index, 0, item);*/
    //return arr;
  },

  count : function(arr, item) {
    return arr.filter(function(element) {
      return element === item;
    }).length;
  },

  duplicates : function(arr) {
    var result = [];

    arr.sort().forEach(function(current, index, array) {
      if (current !== array[index + 1]) {
        return;
      }
      result.push(current);
    });

    result = result.filter(function(current, index, array) {
      return current !== array[index + 1];
    });

    return result;
  },

  square : function(arr) {
    var result = arr.map(function(current) {
      return current * current;
    });

    return result;
  },

  findAllOccurrences : function(arr, target) {
    var result = [];

    arr.forEach(function(current, index) {
      if (current !== target) {
        return;
      }

      result.push(arr.indexOf(target, index));
    });

    return result;
  }
};
