// index.js
require('@babel/register')({
  presets: [ '@babel/preset-env' ]
});
require('@babel/polyfill');
require('./src/app.js');
