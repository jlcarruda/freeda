

exports.init = (app) => {

  let Reports = API.models.Reports

  app.post('/insertComplaint', API.controllers.complaint.insertComplaint)
  // app.post('/userComplaints', API.controllers.complaint.userComplaints)
  
  app.post('/insertReport', API.controllers.report.insertReport)
  // app.post('/userReports', API.controllers.report.userReports)

  app.post('/getPoints', (req, res, next) => {
    let lat = req.body.lat
    let lng = req.body.lng

    Reports.find({loc:{$near:{$geometry:{type:"Point", coordinates:[lng ,lat]}, $maxDistance:10000}}}, (err, resp) => {
      if(err) return res.status(403).send(err)
      res.send({
        data: resp
      })
    })
  })

}