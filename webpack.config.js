var path = require('path');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
  entry: ['./entry'],
  output: {
    path: __dirname + '/build',
    filename: '[name].js'
  },
  plugins: [
    new CommonsChunkPlugin({
      // process all children of the main chunk
      // if omitted it would process all chunks
      name: 'main',
      // create a additional async chunk for the common modules
      // which is loaded in parallel to the requested chunks
      async: true
    })
  ]
}
