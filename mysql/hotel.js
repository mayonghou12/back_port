/* eslint-disable standard/no-callback-literal */
var query = require('./mysql')

function HotelData (data, callback) {
  console.log(data)
  var sql = 'INSERT INTO hotel(hot_detail, img_id, hot_name, STATUS) VALUES(?,?,?,?)'
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

function getHotelData (data, callback) {
  var sql = 'SELECT * FROM hotel LEFT JOIN img ON hotel.img_id = img.img_id'
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
  HotelData,
  getHotelData
}
