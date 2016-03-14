exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects : function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
    var arr = [];

      for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
          arr.push(property + ': ' + obj[property]);
        }
      }

      return arr;
  }
};
