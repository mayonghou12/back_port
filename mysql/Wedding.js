var query = require('./mysql')

function Wedding(data, callback) {
  var sql = 'INSERT INTO wedding(wed_title, img_id, wed_createTime, STATUS) VALUES(?)'
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

function getweddingData(data, callback) {
  var sql = "SELECT * FROM wedding LEFT JOIN img ON wedding.img_id = img.img_id ORDER BY wed_createTime DESC"
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
  Wedding,
  getweddingData
}