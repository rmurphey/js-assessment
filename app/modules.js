exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
    return {
      name: str2,
      greeting: str1,
      sayIt: function() {
        return this.greeting + ', ' + this.name;
      }
    };
  }
};
