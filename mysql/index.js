var common = require('./common')
var dress = require('./dress')
var Wedding = require('./wedding')
var jewel = require('./jewel')
var hotel = require('./hotel')
var service = require('./service')
var deleteTour = require('./deteleTour')
var deleteTowTour = require('./deteleTowTour')
var filtersTour = require('./filtersTour')
var filtersTowTour = require('./filtersTowTour')
var jewelOne = require('./jewelOne')


var sqlImg = Object.assign({}, common, dress, Wedding, jewel, hotel, service, 
          filtersTour, filtersTowTour, deleteTour, deleteTowTour, jewelOne)

module.exports = sqlImg
