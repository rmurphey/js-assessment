exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise(resolve => resolve(value));
  },

  manipulateRemoteData: function(url) {
    // TODO: figure out why this logic doesn't return what is expected
    const returnData = [];

    return fetch(url)
      .then(response => response.json())
      .then(data => data.people.map((person) => person.name).sort())
    ;
  }
};
