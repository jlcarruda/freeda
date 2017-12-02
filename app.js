const express = require('express')
const helmet = require('helmet') 
const config = require('config')
const FreedaAPI = require('./src/index.js')

const app = express();

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


FreedaAPI.init(app, config).then( () => {
  
    app.listen(config.port, config.host, (err) => {
      console.log('FreedaAPI is ALIVE!');
    })
});

