if (typeof define !== 'function') { var define = require('amdefine')(module); }

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */
define(function() {
  return {
    globals : function() {
      myObject = {
        name : 'Jory'
      };

      return myObject;
    },

    functions : function(flag) {
      if (flag) {
        function getValue() { return 'a'; }
      } else {
        function getValue() { return 'b'; }
      }

      return getValue();
    },

    parseInt : function(num) {
      return parseInt(num);
    },

    identity : function(val1, val2) {

    }
  };
});
