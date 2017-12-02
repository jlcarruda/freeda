
exports.Schema = {
  lat: String,
  long: String,
  name: String,
  description: String,
  type: String,
  contact: {
    name: String,
    phone: String
  }, 
  created: {type: Date, default: Date.now},
  deviceToken: String
}

exports.methods = {
  
}

exports.statics = {}

exports.name = 'Complaints'