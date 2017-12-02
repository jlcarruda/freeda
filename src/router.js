

exports.init = (app) => {

  app.post('/insertComplaint', API.controllers.complaint.insertComplaint)
  app.post('/userComplaints', API.controllers.complaint.userComplaints)
  
  app.post('/insertReport', API.controllers.report.insertReport)
  app.post('/userReports', API.controllers.report.userReports)

  app.post('/dangerPoints', API.controllers.dangerPoint.dangerPoints)
  app.post('/safePoints', API.controllers.safePoint.safePoints)

}