exports = (typeof window === 'undefined') ? global : window;

exports.modulesAnswers = {
  createModule : function(str1, str2) {
    return {
      name: 'matt',
      greeting: 'hello',
      sayIt: function() {
        return [this.greeting, this.name].join(', ');
      }
    }
  }
};
