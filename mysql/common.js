/* eslint-disable standard/no-callback-literal */
// 查询tour_photo

var query = require('./mysql')

function myImg (data, callback) {
  var sql = 'insert into img(img_url) values(?)'
  query(sql, data).then((result) => {
    query('select * from img where img_id = ?', result.insertId).then((res) => {
      callback({
        status: 200,
        data: {
          id: result.insertId
        }
      })
    })
  }).catch((err) => {
    console.log(err)
  })
}

// function sqlimgId(data) {
//   var sql = 'SELECT * FROM tour_photo LEFT JOIN img ON tour_photo.img_id = img.img_id'
// }

function myTour (data, callback) {
  var sql = 'INSERT INTO tour_photo(tour_title, img_id, tour_createTime, status) VALUES(?,?,?,?)'
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

function getTourData (data, callback) {
  var sql = 'SELECT * FROM tour_photo LEFT JOIN img ON tour_photo.img_id = img.img_id ORDER BY tour_createTime DESC'
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
  myImg,
  myTour,
  getTourData
}
