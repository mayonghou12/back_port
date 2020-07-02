/* eslint-disable standard/no-callback-literal */
var query = require('./mysql')

function WeddingData (data, callback) {
  var sql = 'INSERT INTO wedding(wed_title, img_id, wed_createTime, STATUS, img_url) VALUES(?,?,?,?,?)'
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

function getWeddingData (data, callback) {
  var sql = 'SELECT * FROM wedding ORDER BY wed_createTime DESC'
  query(sql).then((result) => {
    callback({
      status: 200,
      data: {
        list: result
      }
    })
  })
}

function getWeddingsix (data, callback) {
  var sql = 'SELECT * FROM wedding ORDER BY wed_createTime ASC limit 0,6'
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
  WeddingData,
  getWeddingData,
  getWeddingsix
}
