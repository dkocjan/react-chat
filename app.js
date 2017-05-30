const express = require('express'),
      app     = express(),
      server  = require('http').Server(app),
      port    = 8080

// Dev mode
if (process.env.NODE_ENV === 'development') {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }))
}

// Public directory where app files are
app.use(express.static(__dirname + '/public'))

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

// Sockets
const io      = require('socket.io')(server),
      sockets = require('./sockets')
io.on('connection', sockets)

// Start server
server.listen(port, () => {
  console.log(`Server listening on ${port} in ${app.get('env')} mode`)
})
