import React from 'react'

class CharComponent extends React.Component {

    render() {
      const { length, value, click } = this.props

      return (
        <div className='CharComponent' onClick={click}>  
          {value}
        </div>
      )
    }
  }

export default CharComponent