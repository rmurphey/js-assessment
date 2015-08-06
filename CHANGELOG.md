# Change Log

## 0.3.1

- Updated grunt-contrib-jshint to latest version to get latest version of jshint(supports mocha environment and multiple .jshintrc and config extension)
- Updated jshint configs to prevent errors for unit test source files and be more strict about when unit test syntax and globals are allowed
- Updated unit test files to set required answers as a local variable to remove dependency on using "predef" property in .jshintrc and manually mantaining list

## 0.3.0

- Remove jquery, backbone, underscore, mocha, and chai as local libraries
- Remove RequireJS
  - node deps use native `require()`
  - browser deps are `script` tags

## 0.2.0

- Convert app from Express to using serve-static
- Replace bin/server with a `grunt connect` task and `npm start` script
- Update dependencies

## < 0.1.0

- Initial commits. Hello World!
