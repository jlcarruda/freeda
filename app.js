const express = require('express')
const helmet = require('helmet') 
const config = require('config')
const FreedaAPI = require('./src/index.js')
const bodyParser = require('body-parser')

let app = express();

global.API = {
  controllers: [],
  models: []
}

// Security Middleware
app.use(helmet())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: '50mb' }))


app.all('/*', function(req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "*") // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key')
  if (req.method == 'OPTIONS') {
    res.status(200).end()
  } else {
    next()
  }
})


FreedaAPI.init(app, config).then( () => {
    config.port = (process.env.PORT) ? process.env.PORT : config.port
    config.host = (process.env.IP) ? process.env.IP : config.host
    

    app.listen(config.port, config.host, (err) => {
      console.log('FreedaAPI is ALIVE!')
      console.log('Running on', `${config.host}:${config.port}`);
    })
});

