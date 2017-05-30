// Watch which names are being used
const names = (() => {
  
  let claimedNames = {}
  
  const exampleNames = [
    'gemJoint',
    'fraidyScorpion',
    'vegInnocent',
    'featherlyDual',
    'radialBellhop',
    'blessLecherous',
    'dreadStar',
    'countryPortfolio',
    'archivistPyongyang',
    'teaPierce',
    'shelbyTopsail',
    'sugarOgle',
    'fordBoaz',
    'aboutAbashed',
    'sparrowCure',
    'pastChaos',
    'swordThriving',
    'crepeWetSuit',
    'stickerDen',
    'troublePitches',
    'cannonArrow',
    'counselSawt',
    'tillerAggresive',
    'insertBargemaster',
    'murderFinite'
  ]
  
  // Claim name
  const claimName = (name) => {
    if (!name || claimedNames[ name ])
      return false
    else if (claimedNames[ name ] = true)
      return true
  }
  
  // Find unique random name that no one has in the chat
  const getRandomName = () => {
    let name
    
    // Check if someone owns that name
    do {
      // name = random item from exampleNames array + random integer from 0-999
      name =
        exampleNames[ Math.floor(Math.random() * exampleNames.length) ] +
        Math.floor(Math.random() * 1000)
    } while (!claimName(name))
    
    return name
  }
  
  const getOnlineUsers = () => {
    let arr = []
    
    for (name in claimedNames) {
      arr.push(name)
    }
    
    return arr
  }
  
  const freeName = (name) => {
    if (claimedNames[ name ]) {
      delete claimedNames[ name ]
    }
  }
  
  return { claimName, getRandomName, getOnlineUsers, freeName}
})()

module.exports = (socket) => {
  let name = names.getRandomName()
  
  // Send user name and list of chat users
  socket.emit('init', {
    name,
    users: names.getOnlineUsers()
  })
  
  // Broadcast user join
  socket.broadcast.emit('userHasJoined', {
    name
  })
  
  // Broadcast message
  socket.on('message', (data) => {
    socket.broadcast.emit('message', {
      user: name,
      text: data.text
    })
  })
  
  // Free name and broadcast user left
  socket.on('disconnect', () => {
    socket.broadcast.emit('userHasLeft', {
      name
    })
    names.freeName(name)
  })
  
  // Check if user name is claimed and brooadcast name change
  socket.on('changeName', (data, status) => {
    if (names.claimName(data.name)) {
      const oldName = name
      names.freeName(oldName)
      
      name = data.name
      
      socket.broadcast.emit('userHasChangedName', {
        oldName,
        newName: name
      })
      
      status(true)
    } else {
      status(false)
    }
  })
}
