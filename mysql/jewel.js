var query = require('./mysql')

function JewelData(data, callback) {
  var sql = 'INSERT INTO jewel(jew_title, img_id, jew_createTime, STATUS) VALUES(?,?,?,?)'
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

function getJewelData(data, callback) {
  var sql = 'SELECT * FROM jewel LEFT JOIN img ON jewel.img_id = img.img_id ORDER BY jew_createTime DESC'
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
  JewelData,
  getJewelData
}