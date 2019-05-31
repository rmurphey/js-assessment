if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    or: function (a, b) {
      return a || b;
    },

    and: function (a, b) {
      return a && b;
    }
  };
});
