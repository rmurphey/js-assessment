exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    'use strict';
    var timeOut;

    var iteration = function(i) {
      console.log(i);

      if(i < end) {
        timeOut = setTimeout(iteration, 100, i+1);
      }
    };

    if(start <= end) {
      iteration(start);
    }

    return {
      cancel: function() {
        clearTimeout(timeOut);
      }
    }
  }
};
