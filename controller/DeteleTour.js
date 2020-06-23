// const Detele = require('../mysql')
const { DeleteTourData } = require('../mysql/deteleTour')

const DeteleTour = (req, res) => {
  var info =req.query || req.body

  if(!info.tour_id){
    res.json({
      status: 502,
      message: '请输入id'
    })
  }
  DeleteTourData([info.tour_id], (data) => {
    res.json({
      data: data
    })
  })
}

module.exports = {
  DeteleTour
}