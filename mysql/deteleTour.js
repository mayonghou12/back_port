const query = require('./mysql')

function DeleteTourData (data, callback) {
  var sql = 'delete from tour_photo where tour_id = ?'
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
  DeleteTourData
}
