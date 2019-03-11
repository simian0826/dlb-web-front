var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'
var isItg = process.env.NODE_ENV === 'itg'
var isDevProd = process.env.NODE_ENV === 'devprod'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : isItg ? config.itg.productionSourceMap
            : isDevProd ? config.devprod.productionSourceMap : config.dev.cssSourceMap,

    extract: isProduction
  })
}
