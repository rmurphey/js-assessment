exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
    alterContext: function(fn, obj) {
        return fn.call(obj);
    },

    alterObjects: function(constructor, greeting) {
        constructor.prototype.greeting = greeting;
    },

    iterate: function(obj) {
        var accum = [];  
        for (i in obj) {
            if (obj.hasOwnProperty(i)){
                accum.push(i + ": " + obj[i])
            }
        }
        return accum;
    }
};
