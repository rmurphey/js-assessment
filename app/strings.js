exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var match = str.match(/(\w)\1{1,}/g);
    match.forEach(function(item) {
      if(item.length > amount) {
        str = str.replace(item, item.substr(0, amount));
      }
    });
    return str;
  },
  wordWrap: function(str, cols) {
    var output = [];
    var line = '';
    str.trim().split(/\s/).forEach(function(word) {
      if(!line.length) {
        line = word;
      } else if((line + ' ' + word).length > cols){
        output.push(line);
        line = word;
      } else {
        line += ' ' + word;
      }
    });
    if(line.length) {
      output.push(line);
    }
    return output.join('\n');
  },
  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
