exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
    indexOf: function(arr, item) {
        for (var i = 0, j = arr.length; i < j; i++) {
            if (arr[i] === item) return i; 
        }

        return -1;
    },

    sum: function(arr) {
        var sum = 0;
        for (var i = 0, j = arr.length; i < j; i++){
            sum += arr[i]
        }
        return sum;
    },

    remove: function(arr, item) {
        var accum = [];
        for (var i = 0, j = arr.length; i < j; i++){
            if (arr[i] !== item) accum.push(arr[i]);
        }
        return accum;
    },

    removeWithoutCopy: function(arr, item) {
        for (var i = 0, j = arr.length; i < j; i++){
            if (arr[i] === item) {
                arr.splice(i, 1);
                i--;
                j--;
            }
        }
        return arr;
    },

    append: function(arr, item) {
        arr.push(item);
        return arr
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

    },

    duplicates: function(arr) {

    },

    square: function(arr) {

    },

    findAllOccurrences: function(arr, target) {

    }
};
