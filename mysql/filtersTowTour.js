const query = require('./mysql')

function FiltersTowTourData (data, callback) {
  var sql = 'UPDATE hotel SET STATUS=CASE WHEN STATUS=0 THEN 1 ELSE 0 END WHERE hot_id = ?'
  query(sql, data).then((result) => {
    callback({
      status: 200,
      message: '修改成功'
    })
  }).catch(() => {
    callback({
      status: 506,
      message: '数据库错误'
    })
 })
}


// var tablename={
//   tour_photo,
//   hotel 
// }

// function FiltersTourData (data, callback) {

//     var sql = 'UPDATE '+tablename+' SET STATUS=CASE WHEN STATUS=0 THEN 1 ELSE 0 END WHERE hot_id = ?'
//     query(sql, data).then((result) => {
//       callback({
//         status: 200,
//         message: '修改成功'
//       })
//     }).catch(() => {
//       callback({
//         status: 506,
//         message: '数据库错误'
//       })
//    })
//   }

module.exports = {
    FiltersTowTourData
}
