exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise(function(resolve, reject) {
      resolve(value);
    });
  },

  manipulateRemoteData: function(url) {
    // TODO: figure out why this logic doesn't return what is expected
    var returnData = [];

    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        returnData = Object.keys(data.people).map(function(key) {
          return data.people[key];
        });
      })
    ;

    return returnData;
  }
};
