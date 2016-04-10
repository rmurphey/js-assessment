exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    //count each number from start to end
    //one number per 1/10th of a second
    //return an object w/ cancel method, which cancels the counting
    console.log(start, "start")
    console.log(end, "end")
  },

  cancel: function () {

  }
};
