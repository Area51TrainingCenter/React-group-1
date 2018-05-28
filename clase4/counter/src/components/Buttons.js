import React from 'react'

const Buttons = ({ increment, decrement }) => (
  <div>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </div>
)

export default Buttons