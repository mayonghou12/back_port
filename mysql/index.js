var common = require('./common')
var dress = require('./dress')
var Wedding = require('./wedding')

var sqlImg = Object.assign({}, common, dress, Wedding)

module.exports = sqlImg