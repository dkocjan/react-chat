const express = require('express'),
      app     = express(),
      server  = require('http').Server(app),
      port    = 8080

// Public directory where app files are
app.use(express.static(__dirname + '/public'))

// Dev mode
if (process.env.NODE_ENV === 'development') {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }))
}

// Sockets
const io = require('socket.io')(server)
io.on('connection', (socket) => {

})

// Start server
server.listen(port, () => {
  console.log(`Server listening on ${port} in ${app.get('env')} mode`)
})
