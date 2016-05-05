exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    var deferred = $.Deferred();
       setTimeout(function() {
         deferred.resolve(value);
       }, 1);
    return deferred.promise();

  },

  manipulateRemoteData: function(url) {

  var deferred = $.Deferred();

      $.ajax(url).then(function(resp) {
        var per = $.map(resp.people, function(person) {
          return person.name;
        });
        deferred.resolve(per.sort());
      });

      return deferred.promise();
  }


};
