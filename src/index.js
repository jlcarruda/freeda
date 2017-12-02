const glob = require('glob')
const Glob = glob.Glob
const path = require('path')

exports.init = (app, config) => {
  let controllers = []
  let models = []
  new Glob("./src/entities/**/controller.js", (err, matches) => {
    
    matches.forEach((filePath) => {
      let splitted = filePath.split('/')
      let entityName = splitted[3];
      let absolutePath = __dirname + filePath.slice(1, filePath.length) 
      console.log(absolutePath);
      controllers[entityName] = require(absolutePath);
    })
  })
  // let modelsPath = glob.sync("./entities/**/model.js");
  // console.log(controllers.cache)
  return Promise.resolve()
}