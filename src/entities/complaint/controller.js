
exports.insertComplaint = (req, res, next) => {
  let Complaints = API.models.Complaints
  console.log(req.body);
  Complaints.insert(req.body).then( (status) => {
    res.status(status).send()
    console.log('CHEGUEI');
  }).catch(next)
}


exports.userComplaints = (req, res) => {
  
}