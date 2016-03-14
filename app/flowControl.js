exports = (typeof window === 'undefined') ? global : window;

exports.flowControlAnswers = {
  fizzBuzz : function(num) {
    // write a function that receives a number as its argument;
    // if the number is divisible by 3, the function should return 'fizz';
    // if the number is divisible by 5, the function should return 'buzz';
    // if the number is divisible by 3 and 5, the function should return
    // 'fizzbuzz';
    //
    // otherwise the function should return the number, or false if no number
    // was provided or the value provided is not a number



    // Checks if the value provided is a number.
    if (typeof num !== 'number') {
      return false;
    }

    // if the number is divisible by 3 and 5, the function should return fizzbuzz
    if (num % 3 === 0 && num % 5 === 0) {
      return 'fizzbuzz';
    }

    // if the number is divisible by 3, the function should return 'fizz';
    if (num % 3 === 0) {
      return 'fizz';
    }

    // if the number is divisible by 5, the function should return 'buzz';
    if (num % 5 === 0) {
      return 'buzz';
    }



    // if nothing from above is true treturn the number
    return num;

  }
};
