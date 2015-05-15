exports = (typeof window === 'undefined') ? global : window;

exports.logicalOperatorsAnswers = {
  or : function(a, b) {
    if((a === true) && (b === true)){
      return true;
    } else if(a === true){
      return true;
    } else if (b === true){
      return true;
    } else {
      return false;
    }

  },

  and : function(a, b) {
    if((typeof(a)==="boolean")&& (typeof(b)==="boolean")){
      if(a == true){
        if(b == true){
          return true;
        } else{
          return false;
        }
      } else {
        return false;
      }
    } else {
      return true;
    }
  }
};
