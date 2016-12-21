exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
    indexOf: function(arr, item) {
        for (var i = 0, j = arr.length; i < j; i++) {
            if (arr[i] === item) return i; 
        }

        return -1;
    },

    sum: function(arr) {
        /*
        var sum = 0;
        for (var i = 0, j = arr.length; i < j; i++){
            sum += arr[i]
        }
        return sum;
        */
        return arr.reduce((a, b) => a + b, 0);
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
        var count = 0;
        for (var i = 0, j = arr.length; i < j; i++){
            if (arr[i] === item) count += 1;
        }
        return count;
    },

    duplicates: function(arr) {
        // [ 1, 2, 4, 4, 3, 3, 1, 5, 3 ]

        /*
        // this will return a new array with duplicates removed
        newAry =  [...new Set(arr)]
        */
        // here is best answer so far
        var seen = {};
        var dupes = [];

        for (var i = 0, j = arr.length; i < j; i++){
            seen[arr[i]] = seen[arr[i]] ? seen[arr[i]] + 1 : 1;
        }

        for (var item in seen){
            if (seen.hasOwnProperty(item) && seen[item] > 1) {dupes.push(+item)}
        }

        return dupes;

        // here is a longer answer
        /*
        // define a uniq function
        function uniq(a){
            // a value in a set can only occur once
            return Array.from(new Set(a));
        }
        
        var i,
            len = arr.length,
            obj = {},
            dup = [];

        for ( i = 0; i < len; i++ ){
            if (obj.hasOwnProperty(arr[i])){
                dup.push(arr[i]);
            } else {
                obj[arr[i]] = 0;
            }
        }
        // dup returns array of duplicates, but there are now
        return uniq(dup);
        */
    },

    square: function(arr) {
        return arr.map(function(x){
            return Math.pow(x, 2);
        })
    },

    findAllOccurrences: function(arr, target) {
    //    return arr.filter(function(num, index){
    //         if (num === target) {return arr.indexOf(num)}
    //     })
        var found = [];
        arr.forEach((e, i, a) => {
           if (arr[i] === target) { found.push(i) } 
        })
        return found;
        /*
        var found = [];
        for (var i = 0, j = arr.length; i < j; i++){
            if (arr[i] === target) { found.push(i) }
        }
        return found;
        */
    }
};
