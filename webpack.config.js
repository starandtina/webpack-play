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
        name: "main",
        async: "async1"
    }),
    new CommonsChunkPlugin({
        name: "main",
        async: "async2",
        minChunks: 2
    }),
    new CommonsChunkPlugin({
        async: true
    }),
  ]
}
