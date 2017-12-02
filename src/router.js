

exports.init = (app) => {

  let Reports = API.models.Reports

  app.post('/insertComplaint', API.controllers.complaint.insertComplaint)
  // app.post('/userComplaints', API.controllers.complaint.userComplaints)
  
  app.post('/insertReport', API.controllers.report.insertReport)
  // app.post('/userReports', API.controllers.report.userReports)

  app.post('/getPoints', (req, res, next) => {
    
    Reports.find({}, (err, resp) => {
      res.send(resp)
    })
  })

}