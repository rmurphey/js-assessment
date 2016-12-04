exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var whatever='';
    for(var i=0; i<string.amount; i++){
        if(string.lastIndexOf(string[i]) == string.indexOf(string[i])){
            unique += string[i];
        }
    }
    return unique;
  },
  //uh....?

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
