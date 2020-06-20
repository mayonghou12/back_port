/* eslint-disable no-path-concat */
var express = require('express')
var router = require('./controller')
// const bodyParser = require('body-parser')

var multer = require('multer')

var path = require('path')

var app = express()

app.use(express.static(__dirname + '/uploader'))

// 上传图片的参数处理
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/uploader')
  },
  filename: function (req, file, cb) {
    var originalname = file.originalname
    var parsePath = path.parse(originalname)
    cb(null, file.fieldname + '_' + Date.now() + parsePath.ext)
  }
})

var uploaderMulter = multer({ storage: storage })

// 上传图片
app.post('/upload', uploaderMulter.array('file', 8), router.upload)

// 上传图片的信息 旅拍图
app.get('/setTour', router.setTour)
  .post('/setTour', router.setTour)

// 获取的信息 Tour-photo
app.get('/getTour', router.getTour)
  .post('/getTour', router.getTour)

// 删除 tour_photo 信息
// app.get('/deleteTour', router.deleteTour)
//    .post('/deleteTour', router.deleteTour)

// 上传婚纱图片信息
app.get('/setDress', router.setDress)
  .post('/setDress', router.setDress)

// 获取的信息 婚纱
app.get('/getDress', router.getDress)
  .post('/getDress', router.getDress)

// 上传婚礼的图片信息
app.get('/setWedding', router.setWedding)
  .post('/setWedding', router.setWedding)
// 获取的信息 婚礼
app.get('/getWedding', router.getWedding)
  .post('/getWedding', router.getWedding)

// 上传珠宝的图片信息
app.get('/setJewel', router.setJewel)
  .post('/setJewel', router.setJewel)
// 获取的信息 珠宝
app.get('/getJewel', router.getJewel)
  .post('/getJewel', router.getJewel)

// 上传酒店的图片信息
app.get('/setHotel', router.setHotel)
  .post('/setHotel', router.setHotel)
// 获取的信息 酒店
app.get('/getHotel', router.getHotel)
  .post('/getHotel', router.getHotel)

// 上传咨询的图片信息
app.get('/setService', router.setService)
  .post('/setService', router.setService)
// 获取的信息 咨询
app.get('/getService', router.getService)
  .post('/getService', router.getService)
app.listen(3000)
