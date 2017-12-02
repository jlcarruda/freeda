const glob = require('glob')
const Glob = glob.Glob
const path = require('path')
const models = require('./models.js');

exports.init = (app, config) => {
  // Require all controllers into array
  return new Promise((resolve, reject) => {
    new Glob("./src/entities/**/controller.js", (err, matches) => {
      matches.forEach((filePath) => {
        let splitted = filePath.split('/')
        let entityName = splitted[3]
  
        //HACK: OLOCO BIXO que gambs
        let absolutePath = __dirname + '\\..\\' + filePath.slice(1, filePath.length) 
        
        API.controllers[entityName] = require(absolutePath)
      })
    })
    
    // Connect to the database
    models.connect().then( () => {
      new Glob("./src/entities/**/model.js", (err, matches) => {
        matches.forEach((filePath) => {
          let splitted = filePath.split('/')
          let entityName = splitted[3]
    
          //HACK: OLOCO BIXO que gambs
          let absolutePath = __dirname + '\\..\\' + filePath.slice(1, filePath.length) 
          
          models.createModel(require(absolutePath))
        })

        resolve();
      })
    })
    
  })
  
}