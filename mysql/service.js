/* eslint-disable standard/no-callback-literal */
var query = require('./mysql')

function ServiceData (data, callback) {
  var sql = 'INSERT INTO journalism(jou_title, jou_detail, jou_uploadTime, img_id, STATUS) VALUES(?,?,?,?,?)'
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

function getServiceData (data, callback) {
  var sql = 'SELECT * FROM journalism LEFT JOIN img ON journalism.img_id = img.img_id'
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
  ServiceData,
  getServiceData
}
