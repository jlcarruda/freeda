
const mongoose = require('mongoose')

exports.Schema = {
  _id: mongoose.Types.ObjectId,
  lat: String,
  lng: String,
  name: String,
  description: String,
  type: String,
  phone: String,
  created: {type: Date, default: Date.now},
  date: String,
  timestamp: String,
  address: String,
  
  deviceToken: String
}

exports.methods = {
  
}

exports.query = {
  byToken: function(token) {
    return this.find({ deviceToken: token })
  }
}

exports.statics = {
  getByToken: function(token) {
    return this.find({deviceToken: token}, (err, res) => {
      if(err) return Promise.reject(err)
      return Promise.resolve(res)
    })
  },

  insert: function(json) {
    return new Promise( (resolve, reject) => {
      
      if(!json) {
        return resolve(400)
      }
      
      this.create(json, (err, created) => {
        if(err) return reject(err)
        resolve(200)
      })
    })
  }
}

exports.name = 'Complaints'