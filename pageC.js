require.ensure([], function () {
  var utility1 = require('./utility1')
  var utility3 = require('./utility3')
}, 'pageC')

module.exports = 'pageC'
