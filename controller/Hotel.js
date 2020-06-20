const Hotel = require('../mysql')
const { HotelData } = require('../mysql/hotel')

const setHotel = (req, res) => {
  // 获取图片上传的信息，并存入数据库
  var info = req.query || req.body
  console.log(info)
  if (!info.text) {
    res.json({
      status: 503,
      message: '请输入详情'
    })
    return false
  }
  if (!info.imgId) {
    res.json({
      status: 502,
      message: '请上传图片'
    })
    return false
  }
  if (!info.name) {
    res.json({
      status: 504,
      message: '请选择酒店名称'
    })
    return false
  }
  if (!info.status) {
    res.json({
      status: 502,
      message: '请选择状态'
    })
    return false
  }
  HotelData([info.text, info.imgId, info.name, parseInt(info.status)], (data) => {
    res.json({
      data: data
    })
  })
  // 参数都有了之后 操作数据库
  // common.myTour([[info.title, info.imgId, new Date(info.createTime), parseInt(info.status)]], (data) => {
  //   res.json(data)
  // })
}

const getHotel = (req, res) => {
  // 查询数据库中的内容 并返回给前台
  Hotel.getHotelData([], function (data) {
    res.json(data)
  })
}

module.exports = {
  setHotel,
  getHotel
}
