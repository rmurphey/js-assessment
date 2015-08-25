exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return new Promise(function(resolve) {
      resolve(value);
    });
  },

  manipulateRemoteData : function(url) {
    return new Promise(function(resolve) {
      $.get(url).done(function(data) {
        var resolveData = data.people.map(function(item) {
          return item.name;
        }).sort();
        resolve(resolveData);
      });
    });
  }
};
