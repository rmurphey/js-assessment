/*globals describe:true, it:true, expect:true, beforeEach:true */
if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define([
  'app/async'
], function(answers) {
  describe('async behavior', function() {
    it('you should understand how to use promises to handle asynchronicity', function(done) {
      var flag = false;
      var finished = 0;
      var total = 2;

      function finish(done) {
        if (++finished === total) { done(); }
      }

      answers.async(true).then(function(result) {
        flag = result;
        expect(flag).to.eql(true);
        finish(done);
      });

      answers.async('success').then(function(result) {
        flag = result;
        expect(flag).to.eql('success');
        finish(done);
      });

      expect(flag).to.eql(false);
    });

    it('you should be able to receive data from the server and manipulate it', function(done) {
      var url = '/data/testdata.json';

      answers.manipulateRemoteData(url).then(function(result) {
        expect(result).to.have.length(5);
        expect(result.join(' ')).to.eql('Adam Alex Matt Paul Rebecca');
        done();
      });
    });
  });
});
