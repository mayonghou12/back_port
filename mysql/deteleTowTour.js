const query = require('./mysql')

function DeleteTowTourData (data, callback) {
  var sql = 'delete from hotel where hot_id = ?'
  query(sql, data).then((result) => {
    callback({
      status: 200,
      message: '删除成功'
    })
  }).catch(() => {
    callback({
      status: 506,
      message: '数据库错误'
    })
 })
}

module.exports = {
  DeleteTowTourData
}
