import React from 'react'

class Users extends React.Component {
  render() {
    return (
      <div style={{ paddingTop: '90px', paddingBottom: '70px', height: '100vh' }}>
        <div style={{ border: '1px solid lightgray', height: '100%', padding: '10px' }}>
          <h5>Online users</h5>
          <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
            {
              this.props.users.map((user, i) => {
                return (
                  <li key={i}>
                    { user }
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default Users
