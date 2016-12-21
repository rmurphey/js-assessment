exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise(function(resolve, reject){
      resolve(value);
    })
  },

  manipulateRemoteData: function(url) {
    var promise = new Promise(function(resolve, reject){
      resolve(function(){
        return result;
      });
    });

    var xhr = new XMLHttpRequest();

    xhr.addEventListener("load", function(){

      promise.then(function(){
        let pplObject = this.responseText.people;
        
        return (pplObject.map(function(e, i, a){
          return e.name;
        })).sort();
      });
    });

    xhr.open("GET",url);

    xhr.send(null);

    return promise;
  }
};
