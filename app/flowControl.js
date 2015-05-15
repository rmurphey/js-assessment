exports = (typeof window === 'undefined') ? global : window;

exports.flowControlAnswers = {
  fizzBuzz : function(num) {
    if (isNaN(num)){
        return false;
    } else{
        if ((num % 5 ===0 ) && (num % 3===0)){
            return 'fizzbuzz';
        } else if (num % 5===0) {
            return 'buzz';
        } else if (num % 3 === 0){
            return 'fizz';
        } else{
            return num;
        }
    }
    // write a function that receives a number as its argument;
    // if the number is divisible by 3, the function should return 'fizz';
    // if the number is divisible by 5, the function should return 'buzz';
    // if the number is divisible by 3 and 5, the function should return
    // 'fizzbuzz';
    //
    // otherwise the function should return the number, or false if no number
    // was provided or the value provided is not a number

  }
};
