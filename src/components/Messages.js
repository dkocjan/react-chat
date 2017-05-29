import React from 'react'

import Message from './Message'

class Messages extends React.Component {
  render() {
    const styles = {
      messages: {
      
      }
    }
    
    return (
      <div style={ styles.messages }>
        {
          this.props.messages.map((message, i) => {
            return (
              <Message
                key={ i }
                user={ message.user }
                txt={ message.txt}
              />
            )
          })
        }
      </div>
    )
    
  }
}

export default Messages
