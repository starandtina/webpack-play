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
      name: 'vendor',
      minChunks: Infinity // Passing `Infinity` just creates the commons chunk, it means `vendor` only includes `vendor1` and `vendor2`
    })
  ]
}
