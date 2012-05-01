define([ 'jquery', 'use!underscore' ], function($, _) {
  describe("async behavior", function() {

    var promise, fn, Promise;

    beforeEach(function() {

      fn = function() {

      };

      Promise = function () {
        this.cb = null;
      };

      Promise.prototype.then = function (fn) {
        this.cb = fn;
      };

      Promise.prototype.fulfill = function (result) {
        if (this.cb) {
          this.cb(result);
        }
      };

    });

    it("you should understand how to uses 'promises'", function(done) {

      var flag = false;

      fn = function() {

        promise = new Promise();

        // do something here.
        setTimeout(function(){
          promise.fulfill(true);
        }, 20);

        return promise;
      };

      fn().then(function(result) {
        flag = result;
        expect(flag).to.be(true);
        done();
      });

    });

    it("you should be able to receive data from the server and manipulate it", function(done) {
      var peopleArray,
          url = '/data/testdata.json',

          tests = function() {
            expect(peopleArray).to.have.length(5);
            expect(peopleArray.join(' ')).to.be('Adam Alex Matt Paul Rebecca');
            done();
          };

        fn = function(url) {

          promise = new Promise();

          require(["text!" + url], function (json) {
            var obj = JSON.parse(json),
                people = [],
                i,
                l = obj.people.length;

            for (i = 0; i < l; i ++) {
              people[i] = obj.people[i].name;
            }

            people.sort();
            promise.fulfill(people)
          });

          return promise;
        };

        fn(url).then(function(result) {
          peopleArray = result;
          tests();
        });
    });
  });
});
