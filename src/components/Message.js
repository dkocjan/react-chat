import React from 'react'

class Message extends React.Component {
  render() {
    const styles = {
      message: {
      
      },
      user: {
        fontWeight: '700'
      }
    }
    return (
      <div style={ styles.message }>
        <span style={ styles.user }>{ this.props.user }</span>: <span>{ this.props.txt }</span>
      </div>
    )
  }
}

export default Message
