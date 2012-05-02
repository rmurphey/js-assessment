# A test-driven JS assessment

This repo includes a set of tests that can be used to assess the skills of
a candidate for a JavaScript position, or to improve one's own skills.

## I want to work on the tests; what do I do?
To use the tests, you will need to install Node -- you can do this via the
[download page](http://nodejs.org/#download) or using
[Homebrew](http://mxcl.github.com/homebrew/) if you are on a Mac.

Note that on Windows, there are some reports that you will need to restart
after installing Node - see #12.

You can clone or download this repo. Once you have done so, from the root
directory of the repo, run:

    npm install
    node bin/serve

You can then view the tests in your browser at
[http://localhost:4444](http://localhost:4444).

When you visit that page, all of the tests should be failing; your job is to
get the tests to pass. To do this, you'll need to edit the files in the
`tests/app` directory. The tests have inline comments that should point you in
the right direction; once you update a test, you can reload the test page in
the browser to see whether it worked.

You can also run (most of) the tests on the command line. To do this, run the
following:

    ./node_modules/mocha/bin/mocha -R spec tests/runner.js

The command line runner is a work in progress; contributions welcome :)

## I want to contribute tests; what do I do?

Submit a pull request! The tests are currently loosely organized by topic, so
you should do your best to add tests to the appropriate file in `tests/app`, or
create a new file there if you don't see an appropriate one. If you do create
a new file, make sure to add it to `tests/runner.js`.

Any substantial contributions will be duly credited in the readme, as well as
of course in the git commit log.

### Data-driven tests

If your tests need data that can be fetched via XHR, stick a `.json` file in
the `data` directory; you can access it at `/data/<filename>.json`.

### Available dependencies

The repo includes Backbone, Underscore, and RequireJS. If there's other stuff
you'd find useful, you can put it in the `lib` directory.

## I want to see the answers!

I haven't worked out how best to show the answers, or whether to show them at
all. For now, if you're stuck, the tests themselves should include enough
keywords that your friendly neighborhood search engine can point you in the
right direction.

## I hate \<some technology you've chosen\>

This repo uses [RequireJS](http://requirejs.org) for dependency management and
[Mocha](http://visionmedia.github.com/mocha/) and [expect.js](https://github.com/LearnBoost/expect.js/blob/master/README.md)
for the tests themselves. It uses the BDD style for authoring tests. If this
doesn't suit you, please fork away, or, better, submit a pull request that lets
this be more flexible than it currently is.

# Todos

There are a number of things that would make this project better; check out the
[issues](https://github.com/rmurphey/js-assessment/issues) for details, pull
requests welcome!

# License

Copyright &copy; 2012 Rebecca Murphey.

This work is licensed under the [Creative Commons Attribution-Share Alike 3.0](http://creativecommons.org/licenses/by-sa/3.0/)
license. You are free to share and remix the work, and to use it for commercial
purposes under the following conditions:

- *Attribution* — You must attribute the work in the manner specified by the
  author or licensor (but not in any way that suggests that they endorse you or
  your use of the work).
- *Share Alike* — If you alter, transform, or build upon this work, you may
  distribute the resulting work only under the same or similar license to this
  one.

Any of these conditions can be waived if you get permission from the copyright
holder.

