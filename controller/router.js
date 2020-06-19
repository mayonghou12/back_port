// const common = require('../mysql/common')

var common = require('./common')
var TourData = require('./TourData')
var Dress = require('./Dress')
var Wedding = require('./wedding')
var Jewel = require('./Jewel')

var router = Object.assign({}, common, TourData, Dress, Wedding, Jewel)

module.exports = router
