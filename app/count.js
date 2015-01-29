if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {  
  return {    
    count : function (start, end) {
      var continueCount = true;
      var counter = start;
      if(counter <= end) {
        console.log(counter);
        counter++;
      }
      var intervalFunc = function(){
        if((counter <= end) && continueCount) {
          console.log(counter);
          counter++;
        } else {
            clearInterval(intervalFunc);
        }
      };
      setInterval(intervalFunc, 100);          
      return {
        cancel: function(){
          continueCount = false;
          }
        };
    }    
  };
});