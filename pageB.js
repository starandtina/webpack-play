require.ensure([], function () {
  var utility2 = require('./utility2')
  var utility3 = require('./utility3')
}, 'pageB')

module.exports = 'pageB'
