

exports.init = (app) => {
  let mongoose = require('mongoose')
  let Reports = API.models.Reports
  let SafePoints = API.models.SafePoints

  app.post('/insertComplaint', API.controllers.complaint.insertComplaint)
  // app.post('/userComplaints', API.controllers.complaint.userComplaints)
  
  app.post('/insertReport', API.controllers.report.insertReport)
  // app.post('/userReports', API.controllers.report.userReports)

  app.post('/getPoints', (req, res, next) => {
    let lat = req.body.lat
    let lng = req.body.lng

    let response = { data : [] }

    Reports.find().then( (resp) => {
    // Reports.find({'lat':{$near:{$geometry:{o:"Point", coordinates:[-1 ,2]}, $maxDistance:1}}}).then( (resp)=>{
      // if(err) return res.status(403).send(err)
      response.data = resp
      return SafePoints.find();
    }).then( (resp) => {
      console.log(resp);
      response.data.concat(resp)

      res.status(200).send(response)
    }).catch( (err) => {
      console.log(err);
      res.status(500).send({
        err: err
      })
    })
  })

}