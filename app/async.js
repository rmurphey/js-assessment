exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    var async = $.Deferred();
    setTimeout(function(){
      async.resolve(value);
    }, 10);
    return async.promise();
  },

  manipulateRemoteData: function(url) {

  }
};
