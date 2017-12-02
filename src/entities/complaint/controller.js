
exports.insertComplaint = (req, res, next) => {
  let Complaints = API.models.Complaints
  Complaints.insert(req.body).then( (status) => {
    res.status(status).send()
  }).catch(next)
}


exports.userComplaints = (req, res) => {
  
}