const mongoose = require('mongoose')
const config = require('config')

exports.createModel = (blueprint) => {
  let model = new mongoose.Schema(blueprint.Schema)

  if(blueprint.methods) {
    model.methods = blueprint.methods
  }

  API.models[blueprint.name] = mongoose.model(blueprint.name, model);
  console.log(`... builded model "${blueprint.name}"`);
}

exports.connect = () => {

  return new Promise( (resolve, reject) => {
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