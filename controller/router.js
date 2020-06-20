// const common = require('../mysql/common')

var common = require('./common')
var TourData = require('./TourData')
var Dress = require('./Dress')
var Wedding = require('./wedding')
var Jewel = require('./Jewel')
var Hotel = require('./Hotel')
var Service = require('./Service')

var router = Object.assign({}, common, TourData, Dress, Wedding, Jewel, Hotel, Service)

module.exports = router
