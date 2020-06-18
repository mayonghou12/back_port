// const common = require('../mysql/common')

var common = require('./common')
var TourData = require('./TourData')
var Dress = require('./Dress')
var wedding = require('./wedding')

var router = Object.assign({}, common, TourData, Dress, wedding)

module.exports = router
