import React from 'react'
import style from './style.css'

class UserInput extends React.Component {
    render() {
      const { change, name } = this.props
      return (
        <>
        <input style={style} type="text" onChange={change} value={name} />
        </>
      )
    }
  }

export default UserInput