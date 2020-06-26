const { DeleteTourData }  = require('../mysql/deteleTour')

const DeteleTour = (req, res) => {
  var tour =req.query || req.body

  if(!tour.tour_id){
    res.json({
      status: 502,
      message: '请输入id'
    })
  }
  DeleteTourData([parseInt(tour.tour_id)], (data) => {
    res.json({
      data: data
    })
  })
}



module.exports = {
  DeteleTour
}