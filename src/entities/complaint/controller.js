
exports.insertComplaint = (req, res, next) => {
  // let Complaints = API.models.Complaints
  // Complaints.insert(req.body).then( (status) => {
  //   res.status(status).send()
  // }).catch(next)
  let Reports = API.models.Reports
  Reports.insert(req.body).then( (status) => {
    res.status(status).send()
  }).catch(next)
}


exports.userComplaints = (req, res) => {
  let token = req.body.token;
  let Complaints = API.models.Complaints

  Complaints.find().byToken(token).exec((err, complaints) => {
    if(err) return res.status(500).send()
    res.status(200).send({
      data: complaints
    })
  })
}