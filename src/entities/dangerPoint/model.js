exports.name = 'DangerPoints'

exports.Schema = {
  lat: String,
  lng: String,
  type: String,
  votes: Number
}

exports.methods = {}

exports.query = {
  byType: function(type) {
    return this.find( {type: type} )
  }
}

exports.statics = {

  insert: function(data) {
    return new Promise( (resolve, reject) => {
      if(!data) return reject(403)

      resolve(200)
    })
  }
}