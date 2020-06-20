var common = require('./common')
var dress = require('./dress')
var Wedding = require('./wedding')
var jewel = require('./jewel')
var hotel = require('./hotel')
var service = require('./service')

var sqlImg = Object.assign({}, common, dress, Wedding, jewel, hotel, service)

module.exports = sqlImg
