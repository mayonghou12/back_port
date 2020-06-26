/* eslint-disable standard/no-callback-literal */
var query = require('./mysql')

function getJewelOneData (data, callback) {

  var sql = 'SELECT * FROM jewel LEFT JOIN img ON jewel.img_id = img.img_id where jew_id = ?'
  query(sql, data).then((result) => {
    callback({
      status: 200,
      data: {
        list: result
      }
    })
  })
}

module.exports = {
  // JewelOneData,
  getJewelOneData
}
