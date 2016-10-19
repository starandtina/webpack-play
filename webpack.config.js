var path = require('path');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
  entry: {
    vendor: ['./vendor1', './vendor2'],
    pageA: './pageA',
    pageB: './pageB',
    pageC: './pageC'
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].js'
  },
  plugins: [
    new CommonsChunkPlugin({
      // The order of this array matters
      names: ['vendor'],
      minChunks: 2
    })
  ]
}
