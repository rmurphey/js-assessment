define([
  'app/async'
], function(answers) {
  describe("async behavior", function() {
    it("you should understand how to uses 'promises'", function(done) {
      var flag = false;

      answers.async().then(function(result) {
        flag = result;
        expect(flag).to.be(true);
        done();
      });
    });

    it("you should be able to receive data from the server and manipulate it", function(done) {
      var url = '/data/testdata.json';

      answers.manipulateRemoteData(url).then(function(result) {
        expect(result).to.have.length(5);
        expect(result.join(' ')).to.be('Adam Alex Matt Paul Rebecca');
        done();
      });
    });
  });
});
