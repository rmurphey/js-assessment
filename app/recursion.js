exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function listFiles(data, dirName) {
    var fileList = [];

    (data.files || []).forEach(function(item) {
      if(typeof  item === 'string') {
        if(!dirName || dirName === data.dir) {
          fileList.push(item);
        }
      } else {
        var dirFiles = listFiles(item, (!dirName || dirName === data.dir)? undefined: dirName);
        fileList.push.apply(fileList, dirFiles);
      }
    });
    return fileList;
  },

  permute: function(arr) { // http://stackoverflow.com/questions/9960908/permutations-in-javascript/11509565#11509565
    var permArr = [],
      usedChars = [];
    return (function main() {
      for (var i = 0; i < arr.length; i++) {
        var ch = arr.splice(i, 1)[0];
        usedChars.push(ch);
        if (arr.length == 0) {
          permArr.push(usedChars.slice());
        }
        main();
        arr.splice(i, 0, ch);
        usedChars.pop();
      }
      return permArr;
    })();
  },

  fibonacci: function fibonacci(n) {
    if(!fibonacci.cache) {
      fibonacci.cache = {};
    }
    if(!fibonacci.cache[n]) {
      if(n<=2) {
        fibonacci.cache[n] = 1;
      } else {
        fibonacci.cache[n] = fibonacci(n -1) + fibonacci(n -2);
      }
    }

    return fibonacci.cache[n];
  },

  validParentheses: function validParentheses(n) {
    if(n === 1) {
      return ['()'];
    }
    var prevParentheses = validParentheses(n-1);
    var list = {};
    prevParentheses.forEach(function(item) {
      list['(' + item + ')'] = null;
      list['()' + item] = null;
      list[item + '()'] = null;
    });
    return Object.keys(list);
  }
};
