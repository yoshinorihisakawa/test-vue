'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  YOUR_KEY: '"xxx"',
  YOUR_DOMAIN: '"xxx"',
  YOUR_ID: '"xxx"',
  YOUR_BUCKET_ID: '"xxx"',
  YOUR_SENDER_ID: '"xxx"',
})
