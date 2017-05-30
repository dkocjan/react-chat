import React from 'react'

import Message from './Message'

class Messages extends React.Component {
  render() {
    return (
      <div style={{ paddingTop: '90px', paddingBottom: '70px', height: '100vh' }}>
        <div
          style={{
            border: '1px solid lightgray',
            height: '100%',
            overflowY: 'scroll'
          }}
          className='inline-block'>
          {
            this.props.messages.map((message, i) => {
              return (
                <Message
                  key={ i }
                  user={ message.user }
                  text={ message.text}
                />
              )
            })
          }
        </div>
      </div>
    )
    
  }
}

export default Messages
