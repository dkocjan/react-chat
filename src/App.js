import React from 'react'

import Messages from './components/Messages'
import Users from './components/Users'
import MessageInput from './components/MessageInput'

class App extends React.Component {
  
  render() {
    return (
      <div>
        <h1>Chat</h1>
        <Messages />
        <Users/>
        <MessageInput/>
      </div>
    )
  }
}

export default App
