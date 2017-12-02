const mongoose = require('mongoose')

exports.name = 'SafePoints'
exports.Schema = {
  _id: mongoose.Types.ObjectId,
  lat: String,
  lng: String,
  name: String,
  photo: String
}

exports.methods = {}

exports.statics = {}