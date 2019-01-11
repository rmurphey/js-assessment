exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

  },

  // I cheated. you don't need to know how to do this without looking it up
  permute: function(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
      let allOthers = this.permute(arr.slice(0, i).concat(arr.slice(i + 1)));

      if (!allOthers.length) {
        result.push(arr[i]);
      } else {
        for (let j = 0; j < allOthers.length; j++) {
          result.push([ arr[i] ].concat(allOthers[j]));
        }
      }
    }

    return result;
  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {
    let startingState = '';

    for (let i = 0; i < n; i++) {
      startingState += '()';
    };

    const allPermutations = this.permute(startingState.split(''));

    return allPermutations
      .filter((item) => {
        // TODO: actually filter for valid pairs here
      })
      .map(item => item.join(''))
    ;
  }
};
