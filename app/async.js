exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
var dfd = $.Deferred();
setTimeout(function() {
dfd.resolve(value);
}, 10);
return dfd.promise();
  },

  

  manipulateRemoteData: function(url) {
    

  }
};
