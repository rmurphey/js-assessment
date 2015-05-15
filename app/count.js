exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var t1 = performance.now();
    for(var i = start; i <= end; i++)
    var t2 = performace.now();
    var totalTime = t2-t1;
    return totalTime;
  }
};
