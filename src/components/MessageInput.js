import React from 'react'

class MessageInput extends React.Component {
  
  constructor(props) {
    super(props)
    
    this.state = { text: '' }
    
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }
  
  onSubmit(e) {
    e.preventDefault()
    
    let message = {
      user: this.props.user,
      text: this.state.text
    }
    
    this.props.onMessageSend(message)
    
    this.setState({ text: '' })
  }
  
  onChange(e) {
    this.setState({ text: e.target.value })
  }
  
  render() {
    return (
      <nav
        className='navbar fixed-bottom navbar-light bg-faded pl-1 pr-1 inline-block'
      >
        <div className='container-fluid ml-0 mr-0 text-center'>
          <form onSubmit={ this.onSubmit } className='form-inline'>
            <div className='input-group w-100'>
              <input
                className='form-control text-center w-100'
                onChange={ this.onChange }
                value={ this.state.text }
                placeholder="Write your message here"
              />
            </div>
          </form>
        </div>
      </nav>
    )
  }
}

export default MessageInput
