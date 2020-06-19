var common = require('./common')
var dress = require('./dress')
var Wedding = require('./wedding')
var jewel = require('./jewel')

var sqlImg = Object.assign({}, common, dress, Wedding, jewel)

module.exports = sqlImg