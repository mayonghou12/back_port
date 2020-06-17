// const common = require('../mysql/common')

var common = require('./common')
var TourData = require('./TourData')

var router = Object.assign({}, common, TourData)

module.exports = router
