import React from 'react'

class ValidationComponent extends React.Component {

    render() {
      const { length } = this.props

      let feedback = null

      if (length >= 5) {
          feedback = (
              <p>Text is too long</p>
          )
      } else {
          feedback = (
              <p>Text is too short</p>
          )
      }
      return (
        <div>  
        <p>Text is: {length}</p>
        {feedback}
        </div>
      )
    }
  }

export default ValidationComponent