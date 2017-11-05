exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
reduceString: function(str, amount) {
    let newString = str[0];
    let counter = 1;

    for (let i = 1; i < str.length; i++) {
      if (str[i] === newString[newString.length - 1] && counter < amount) {
        counter++;
        newString = newString.concat(str[i]);
      } else if (str[i] !== newString[newString.length - 1]) {
        counter = 1;
        newString = newString.concat(str[i]);
      }
    }

    return newString;
  },

  wordWrap: function(str, cols) {},

  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
