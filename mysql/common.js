// 查询bridal_veil

var query = require('./mysql')

function myImg (data, callback) {
  var sql = 'insert into img(img_url) values(?)'
  // console.log(data)
  query(sql, data).then((result) => {
    query('select * from img where img_id = ?', result.insertId).then((res)=> {
      callback({
        status: 200,
        data: {
          id: result.insertId
        }
      })
    })
  }).catch((err)=> {
    console.log(err)
  })
}

function myTour (data, callback) {
  var sql = 'insert into tour_photo(tour_title, img_url, tour_createTime, status) values(?)'
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

module.exports = {
  myImg,
  myTour
}