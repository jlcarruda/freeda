exports.insertReport = (req, res, next) => {
  let obj = req.body
  let Reports = API.models.Reports
  let mongoose = require('mongoose')

  if(!obj) return res.status(403).send()
  
  obj._id = mongoose.Types.ObjectId()

  Reports.create(obj).then( () => {

    res.status(200).send()
  }).catch( (err) => {

    res.status(403).send()
  })
}
