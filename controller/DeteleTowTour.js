// const Detele = require('../mysql')
const { DeleteTowTourData } = require('../mysql/deteleTowTour')

const DeteleTowTour = (req, res) => {
  var info =req.query || req.body

  if(!info.hot_id){
    res.json({
      status: 502,
      message: '请输入id'
    })
  }
  DeleteTowTourData([info.hot_id], (data) => {
    res.json({
      data: data
    })
  })
}

module.exports = {
  DeteleTowTour
}