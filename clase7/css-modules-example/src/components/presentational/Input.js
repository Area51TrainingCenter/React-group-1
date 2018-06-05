import React from 'react'
import styles from './../presentational/Input.css'

const Input = ({ onChange, value }) => {
  return (
    <input
      className={styles.Input}
      type="text"
      onChange={onChange}
      value={value} />
  )
}

export default Input