import React from 'react'
import styles from './Input.css'

const Input = ({ onChange, value }) => {
  return (
    <input
      className={styles.InputWarning}
      type="text"
      onChange={onChange}
      value={value} />
  )
}

export default Input