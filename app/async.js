if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(['jquery'], function ($) {
  return {
    async: function (value) {
      return new Promise(function (resolve, reject) {
        resolve(value);
      });
    },

    manipulateRemoteData: function (url) {
      return window.fetch(url).then(function (response) { return response.json(); }).then(function (result) {
        return new Promise(function (resolve) {
          resolve(result.people.map(function (person) { return person.name; }).sort());
        });
      });
    }
  };
});
