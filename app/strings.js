exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    const charCounts = {};
    let currentChar;

    return str
      .split('')
      .map((char) => {
        charCounts[char] = charCounts[char] || {
          total: 0,
          output: 0,
        };

       charCounts[char].total++;

       return char;
      })
      .filter((char) => {
        if (!currentChar) {
          currentChar = char;
        }

        if (char !== currentChar) {
          charCounts[currentChar].output = 0;

          currentChar = char;
        }

        if (charCounts[char].total < amount) {
          return true;
        }

        if (charCounts[char].output < amount) {
          charCounts[char].output++;

          return true;
        }
      })
      .join('')
    ;
  },

  wordWrap: function(str, cols) {
    // TODO: make this work
    return str;
  },

  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
