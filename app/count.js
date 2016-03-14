exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var timeout;
    function startCount () {
      console.log(start++);

      if (start <= end) {
        timeout = setTimeout(startCount, 100);
      }
    }

    startCount();

    return {
      cancel : function () {
        timeout && clearTimeout(timeout);
      }
    };
  }
};
