exports.insertReport = (req, res, next) => {
  let obj = req.body
  let Reports = API.models.Reports

  if(!obj) return res.status(403).send()
  
  Reports.create(obj).then( () => {

    res.status(200).send()
  }).catch( (err) => {

    res.status(403).send()
  })
}
