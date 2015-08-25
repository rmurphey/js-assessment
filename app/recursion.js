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

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
