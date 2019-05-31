if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    listFiles: function (data, dirName) {
      var findAllFiles = function (data, dirName) {
        return data.files.reduce(function (acc, file) {
          var IS_MATCH_DIR = (!dirName || data.dir === dirName);
          if (typeof file === 'object') {
            return IS_MATCH_DIR ? acc.concat(findAllFiles(file, file.dir)) : acc.concat(findAllFiles(file, dirName));
          } else {
            return IS_MATCH_DIR ? acc.concat([file]) : acc;
          }
        }, []);
      }

      return findAllFiles(data, dirName);
    },

    permute: function (arr) {
      var getAllCombination = function (arr) {
        if (arr.length > 1) {
          return arr.reduce(function (acc, item, index) {
            var remainArray = arr.slice()

            remainArray.splice(index, 1);
            getAllCombination(remainArray).forEach(function (arr) {
              acc.push([item].concat(arr));
            });
            return acc;
          }, []);
        } else {
          return arr;
        }
      };

      return getAllCombination(arr).sort();
    }
  };
});
