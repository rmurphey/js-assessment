exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
      return fn.call(obj);
  },

  alterObjects: function(arg, greet) {
     arg.prototype.greeting = greet;
  },

  iterate: function(obj) {
  var arr = [];

      for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
          arr.push(property + ': ' + obj[property]);
        }
      }

    return arr;
  }
};
