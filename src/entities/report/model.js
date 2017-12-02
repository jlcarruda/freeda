
const mongoose = require('mongoose')
exports.name = 'Reports'

exports.Schema = {
  lat: String,
  lng: String,
  type: String,
  description: String,
  photo: String,
  token: String,
  votes: Number
}

exports.methods = {}

exports.statics = {
  insert: function(data) {
    return new Promise( (resolve, reject) => {
      if(!data) return reject(403)

      data._id = mongoose.Types.ObjectId()
      this.create(data, (err, created) => {
        if(err) return reject(500)

        resolve(200)
      })
    })
  }
}