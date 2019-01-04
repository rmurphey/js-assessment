exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    // TODO: resolve logic to work as test expects

    var count = start;

    var counterInterval = setInterval(function() {
      count++;

      if (count === end) {
        clearInterval(counterInterval);
      }
    }, 100);

    return count;
  }
};
