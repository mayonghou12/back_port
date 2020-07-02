const { FiltersTourData } = require('../mysql/filtersTour')

const FiltersTour = (req, res) => {
  var info =req.query || req.body

  if(!info.tour_id){
    res.json({
      status: 502,
      message: '请输入id'
    })
  }
  FiltersTourData([info.tour_id], (data) => {
    res.json({
      data: data
    })
  })
}




// const FiltersTour = (req, res) => {
//     var info =req.query || req.body
//     console.log(info)
//     if(![info.hot_id, info.tuour_id]){
//       res.json({
//         status: 502,
//         message: '请输入id'
//       })
//     }
//     FiltersTourData([info.hot_id, info.tuour_id], info.table, (data) => {
//       res.json({
//         data: data
//       })
//     })
//   }

module.exports = {
  FiltersTour
}