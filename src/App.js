import React from 'react'

import Messages from './components/Messages'
import OnlineUsers from './components/OnlineUsers'
import MessageInput from './components/MessageInput'
import UsernameChange from './components/UsernameChange'

const socket = io.connect('http://localhost:8080')

class App extends React.Component {
  
  constructor(props) {
    super(props)
    
    this.state = {
      users:    [],
      messages: [],
      text:     ''
    }
    
    this.init = this.init.bind(this)
    this.message = this.message.bind(this)
    this.userHasJoined = this.userHasJoined.bind(this)
    this.userHasLeft = this.userHasLeft.bind(this)
    this.userHasChangedName = this.userHasChangedName.bind(this)
    
    this.handleMessageSend = this.handleMessageSend.bind(this)
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    
  }
  
  componentDidMount() {
    socket.on('init', this.init)
    socket.on('message', this.message)
    socket.on('userHasJoined', this.userHasJoined)
    socket.on('userHasLeft', this.userHasLeft)
    socket.on('userHasChangedName', this.userHasChangedName)
  }
  
  init(data) {
    const { users, name } = data
    
    this.setState({
      users,
      user: name
    })
  }
  
  message(message) {
    const { messages } = this.state
    
    messages.push(message)
    
    this.setState({ messages })
  }
  
  userHasJoined(data) {
    let { users, messages } = this.state,
        { name }            = data
    
    users.push(name)
    
    messages = [
      ...messages,
      {
        user: 'CHAT',
        text: `${name} has joined`
      }
    ]
    
    this.setState({ users, messages })
  }
  
  userHasLeft(data) {
    const { users, messages } = this.state,
          { name }            = data,
          index               = users.indexOf(name)
    
    users.splice(index, 1)
    messages.push({
      user: 'CHAT',
      text: `${name} has left`
    })
    this.setState({ users, messages })
  }
  
  userHasChangedName(data) {
    const { oldName, newName } = data,
          { users, messages }  = this.state,
          index                = users.indexOf(oldName)
    
    users.splice(index, 1, newName)
    
    messages.push({
      user: 'CHAT',
      text: `${oldName} has changed name to ${newName}`
    })
    this.setState({ users, messages })
  }
  
  handleMessageSend(message) {
    let { messages } = this.state
    
    messages.push(message)
    
    this.setState({ messages })
    
    socket.emit('message', message)
  }
  
  handleUsernameChange(newName) {
    const oldName = this.state.user
    
    socket.emit('changeName', { name: newName }, (status) => {
      if (!status) {
        return alert('Name is claimed or null or unchanged')
      }
      
      const { users } = this.state,
            index     = users.indexOf(oldName)
      
      users.splice(index, 1, newName)
      this.setState({ users, user: newName })
    })
  }
  
  render() {
    return (
      <div>
        <UsernameChange
          currentName={ this.state.user }
          onUsernameChange={ this.handleUsernameChange }
        />
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-12 hidden-xs-down col-sm-5 col-md-4 col-lg-3 col-xl-2'>
              <OnlineUsers
                users={ this.state.users }
              />
            </div>
            <div className='col-12 col-sm-7 col-md-8 col-lg-9 col-xl-10'>
              <Messages
                messages={ this.state.messages }
              />
            </div>
          </div>
        </div>
        <MessageInput
          user={ this.state.user }
          onMessageSend={ this.handleMessageSend }
        />
      </div>
    )
  }
}

export default App
