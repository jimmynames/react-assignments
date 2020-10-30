import React from 'react'

class UserOutput extends React.Component {
    render() {
      const { username } = this.props
      return (
        <>
        <p style={{color: "red"}}>My username is: {username}</p>
        <p>...</p>
        </>
      )
    }
  }

export default UserOutput