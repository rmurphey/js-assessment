exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    obj.fn = fn;
    return obj.fn();
  },

  alterObjects : function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
    let objectProperties = [];
    for(var key in obj) {
      if(obj.hasOwnProperty(key)){ objectProperties.push(key + ": " + obj[key]); }
    }
    return objectProperties;
  }
};
