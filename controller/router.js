// const common = require('../mysql/common')

var common = require('./common')
var imgData = require('./imgData')

var router = Object.assign({}, common, imgData)

module.exports = router
