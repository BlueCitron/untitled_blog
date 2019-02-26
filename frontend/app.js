// require('@babel/register')({
//   plugins: [ '@babel/plugin-syntax-dynamic-import' ]
// });
// require('./.nuxt/index.js');

const { Nuxt } = require('nuxt-start')

// Require nuxt config
const config = require('./nuxt.config.js')

// Create a new nuxt instance (config needs dev: false)
const nuxt = new Nuxt(config)

// Start nuxt.js server
nuxt.listen(3000) // nuxt.listen(port, host)

// Or use `nuxt.render` as an express middleware
