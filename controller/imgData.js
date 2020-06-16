const setImgData = (req, res) => {
  //获取图片上传的信息，并存入数据库
  var info =req.query || req.body
  console.log(info)
  if(!info.title) {
    res.json({
        status: 503,
        message: '请输入标题'
    })
    return false
  }
  if(!info.imgId) {
    res.json({
        status: 502,
        message: '请上传图片'
    })
    return false
  }
  if(!info.createTime) {
    res.json({
        status: 504,
        message: '请选择时间'
    })
    return false
  }
  if(!info.status) {
    res.json({
        status: 502,
        message: '请选择状态'
    })
    return false
  }
  // // 参数都有了之后 操作数据库
  // common.setImgdata([[info.title, parseInt(info.imgId), new Date(info.createTime), parseInt(info.status)]], (data) => {
  //   res.json(data)
  // })
}

module.exports = {
  setImgData
}
