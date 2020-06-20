var mysql = require('mysql')

// 数据库配置信息
var dbl = {
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: '',
  database: 'aurwedding'
}

var pool = mysql.createPool(dbl)
function query (sql, data) {
  return new Promise(function (resolve, reject) {
    pool.getConnection(function (err, connection) {
      if (err) {
        reject(err)
      } else {
        connection.query(sql, data, function (error, results, fields) {
          if (error) {
            reject(err)
          } else {
            resolve(results)
          }
          connection.release()
        })
      }
    })
  })
}
module.exports = query
