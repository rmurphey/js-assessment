var express   = require('express'),
    fs        = require('fs'),
    _         = require('underscore'),

    site      = express.createServer(),
    staticDir = express['static'];

module.exports = function(opts) {
  opts = _.extend({
    port :      4444,
    baseDir :   './'
  }, opts || {});

  site.configure(function() {
    [ 'app', 'lib', 'tests' ].forEach(function(dir) {
      site.use('/' + dir, staticDir(opts.baseDir + dir));
    });
    site.use(express.bodyParser());
  });

  site.get("/", function(req, res) {
    fs.createReadStream(opts.baseDir + 'tests/runner.html').pipe(res);
  });

  // Actually listen
  site.listen(opts.port);
  console.log("Serving at http://localhost:" + opts.port);
};
