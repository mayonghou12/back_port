/* eslint-disable standard/no-callback-literal */
var query = require('./mysql')

function DressData (data, callback) {
  var sql = 'INSERT INTO bridal_veil(bv_title, img_id, bv_createTime, STATUS) VALUES(?,?,?,?)'
  query(sql, data).then((result) => {
    callback({
      status: 200,
      message: '上传成功'
    })
  }).catch(() => {
    callback({
      status: 506,
      message: '数据库错误'
    })
  })
}

function getDressData (data, callback) {
  var sql = 'SELECT * FROM bridal_veil LEFT JOIN img ON bridal_veil.img_id = img.img_id ORDER BY bv_createTime DESC'
  query(sql).then((result) => {
    callback({
      status: 200,
      data: {
        list: result
      }
    })
  })
}

module.exports = {
  DressData,
  getDressData
}
