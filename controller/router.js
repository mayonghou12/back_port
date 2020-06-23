// const common = require('../mysql/common')

var common = require('./common')
var TourData = require('./TourData')
var Dress = require('./Dress')
var Wedding = require('./wedding')
var Jewel = require('./Jewel')
var Hotel = require('./Hotel')
var Service = require('./Service')
var DeleteTour = require('./DeteleTour')
var DeleteTowTour = require('./DeteleTowTour')
var FiltersTour = require('./FiltersTour')
var FiltersTowTour = require('./FiltersTowTour')

var router = Object.assign({}, common, TourData, Dress, Wedding, Jewel, Hotel, Service, FiltersTour,FiltersTowTour, DeleteTour, DeleteTowTour)

module.exports = router
