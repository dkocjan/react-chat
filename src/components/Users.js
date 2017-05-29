import React from 'react'

class Users extends React.Component {
  render() {
    const styles = {
      users: {
      
      },
      users__list: {
        listStyleType: 'none'
      }
    }
    return (
      <div style={ styles.users }>
        <h1>Users</h1>
        <ul>
          {
            this.props.users.map((user, i) => {
              return (
                <li style={ styles.users__list } key={i}>
                  { user }
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default Users
