import React, { Component } from 'react'
import Radium from 'radium'

class ButtonRadium extends Component {
  render() {
    return (
      <button style={styles}>I'm a Radium button</button>
    )
  }
}

const styles = {
  backgroundColor: '#ff0000',
  width: 320,
  padding: 20,
  borderRadius: 5,
  border: 'none',
  outline: 'none',
  ':hover': {
    color: '#fff',
  },
  ':active': {
    position: 'relative',
    top: 2,
  },
  '@media (max-width: 480px)': {
    width: 160,
  },
}

export default Radium(ButtonRadium)