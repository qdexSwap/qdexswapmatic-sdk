
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./maticsdk.cjs.production.min.js')
} else {
  module.exports = require('./maticsdk.cjs.development.js')
}
