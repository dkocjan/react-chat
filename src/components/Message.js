import React from 'react'

class Message extends React.Component {
  render() {
    const styles = {
      message: {
        //textWrap: 'unrestricted',
        //wordWrap: 'break-word',
        wordBreak: 'break-all'
      },
      user: {
        fontWeight: '700'
      }
    }
    return (
      <div style={ styles.message }>
        <span style={ styles.user }>@{ this.props.user }</span>: <span>{ this.props.text }</span>
      </div>
    )
  }
}

export default Message
