
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./qdexswapmaticsdk.cjs.production.min.js')
} else {
  module.exports = require('./qdexswapmaticsdk.cjs.development.js')
}
