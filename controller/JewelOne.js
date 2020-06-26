const { getJewelOneData } = require('../mysql/jewelOne')

const getJewelOne = (req, res) => {
  // 获取图片上传的信息，并存入数据库
  var info = req.query || req.body

  if (!info.jew_id) {
    res.json({
      status: 502,
      message: '请输入ID'
    })
    return false
  }
  getJewelOneData([parseInt(info.jew_id)], (data) => {
    res.json({
      data: data
    })
  })
}

module.exports = {
  getJewelOne
}
