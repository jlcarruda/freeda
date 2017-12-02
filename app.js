const express = require('express')
const helmet = require('helmet') 
const config = require('config')
const FreedaAPI = require('./src/index.js')
const bodyParser = require('body-parser')

const app = express();

global.API = {
  controllers: [],
  models: []
}

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

// Security Middleware
app.use(helmet())
app.use(bodyParser.json())

FreedaAPI.init(app, config).then( () => {
    if(process.env.NODE_ENV == 'production') {
      config.port = process.env.PORT
      config.host = process.env.IP
    }

    app.listen(config.port, config.host, (err) => {
      console.log('FreedaAPI is ALIVE!')
      console.log('Running on', `${config.host}:${config.port}`);
    })
});

