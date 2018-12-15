exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    var timer;
    function count () {
      console.log(start++);

      if(start <= end){
        timer = setTimeout(count, 100);
      }
    }

    count();

  }
};
