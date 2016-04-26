const fs = require('fs');
const browserSync = require('browser-sync').create();

const port = process.env.PORT || '4444';
const host = process.env.HOST || '127.0.0.1';

browserSync.init({
  server: {
    baseDir: __dirname,
    index: 'tests/runner.html'
  },
  files: ['app/**/*.js'],
  host: host,
  port: port,
  open: false,
  notify: false,
  ui: false,
  ghostMode: false,
  logLevel: 'silent'
});

f = fs.readFileSync(__dirname + '/help.txt', 'utf8');
console.log(f.replace('{{host}}', host).replace('{{port}}', port));
console.log('Server running http://%s:%d', host, port);
