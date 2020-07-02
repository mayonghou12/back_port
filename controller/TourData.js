const common = require('../mysql')
const { myTour } = require('../mysql/common')

const setTour = (req, res) => {
  // 获取图片上传的信息，并存入数据库
  var info = req.query || req.body
  if (!info.title) {
    res.json({
      status: 503,
      message: '请输入标题'
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
  if (!info.createTime) {
    res.json({
      status: 504,
      message: '请选择时间'
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
  myTour([info.title, info.imgId, new Date(info.createTime), parseInt(info.status), info.imgUrl], (data) => {
    res.json({
      data: data
    })
  })
  // 参数都有了之后 操作数据库
  // common.myTour([[info.title, info.imgId, new Date(info.createTime), parseInt(info.status)]], (data) => {
  //   res.json(data)
  // })
}

const getTour = (req, res) => {
  // 查询数据库中的内容 并返回给前台
  common.getTourData([], function (data) {
    res.json(data)
  })
}

const getTourThree = (req, res) => {
  common.getTourthree([], function (data) {
    res.json(data)
  })
}

module.exports = {
  setTour,
  getTour,
  getTourThree
}
