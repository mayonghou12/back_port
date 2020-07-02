const Hotel = require('../mysql')
const { HotelData } = require('../mysql/hotel')

const setHotel = (req, res) => {
  // 获取图片上传的信息，并存入数据库
  var info = req.query || req.body

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
  if (!info.status) {
    res.json({
      status: 502,
      message: '请选择状态'
    })
    return false
  }
  HotelData([info.text,info.name, info.imgId, parseInt(info.status)], (data) => {
    res.json({
      data: data
    })
  })

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
