const mongoose = require('mongoose')
const config = require('config')

exports.createModel = (blueprint) => {
  let schema = blueprint.Schema;
  schema._id = mongoose.Schema.Types.ObjectId;

  let model = new mongoose.Schema(blueprint.Schema)

  if(blueprint.methods) {
    model.methods = blueprint.methods
  }

  if(blueprint.statics) {
    model.statics = blueprint.statics
  }

  if(blueprint.query) {
    model.query = blueprint.query
  }

  API.models[blueprint.name] = mongoose.model(blueprint.name, model);
  console.log(`... builded model "${blueprint.name}"`);
}

// Connect to Database
exports.connect = () => {

  return new Promise( (resolve, reject) => {
    mongoose.Promise = Promise;
    mongoose.connect(config.database.uri, {useMongoClient: true})
    const db = mongoose.connection;
  
    db.on('error', (err) => {
      console.error.bind(console, 'connection error:')
      reject(err);
    });
  
    db.once('open', () => {
      console.log('Database Connected!');
      resolve();
    });

    
  })
}