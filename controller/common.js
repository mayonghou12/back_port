var mysqlimg = require('../mysql')

const upload = (req, res) => {
  var filename = req.files[0].filename
  if (filename) {
    // 存储图片
    mysqlimg.myImg([[filename]], (data) => {
      res.json(data)
    })
  } else {
    res.json({
      status: 502,
      message: '请上传图片'
    })
  }
}

module.exports = {
  upload
}
