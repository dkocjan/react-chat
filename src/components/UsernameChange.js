import React from 'react'

class UsernameChange extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      newName: ''
    }
    
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  onChange(e) {
    this.setState({ newName: e.target.value })
  }
  
  handleSubmit(e) {
    e.preventDefault()
    const newName = this.state.newName
    this.props.onUsernameChange(newName)
    this.setState({ newName: '' })
  }
  
  render() {
    
    return (
      <nav
        className='navbar fixed-top navbar-light bg-faded pl-1 pr-1 inline-block'
      >
        <div className='container-fluid ml-0 mr-0 text-center'>
          <small className='text-center'>Your username: <strong>{ this.props.currentName }</strong></small>
          <form onSubmit={ this.handleSubmit } className='form-inline'>
            <div className='input-group w-100'>
              <input
                className='form-control text-center w-100'
                onChange={ this.onChange }
                value={ this.state.newName }
                placeholder='Wanna change your name?'
              />
            </div>
          </form>
        </div>
      </nav>
    )
  }
}

export default UsernameChange
