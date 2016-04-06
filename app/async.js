exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    var promise = new Promise(function(resolve, reject) {
      if(value){
        resolve(value);
      } else {
        reject(Error("No value"));
      }
    });
    return promise;
  },

  manipulateRemoteData : function(url) {
    var parseJson = function(response) {
      return response.json();
    };

    var getSortedValues = function(data){
      var parsedAry = [];
      for(var key in data) {
        if(typeof data[key] == 'object') {
          parsedAry = parsedAry.concat(getSortedValues(data[key]));
        } else {
          parsedAry.push(data[key]);
        }
      }
      return parsedAry.sort();
    };

    var promise = fetch(url).then(parseJson);
    return promise.then(getSortedValues);
  }
};
