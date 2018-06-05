import React from 'react'
import styles from './Button.css'

const Button = ({name}) => {
  console.log(name);
  const newStyle = name === 'area51' ? styles.button : styles.buttonFail;
  return (
    <button className={newStyle}>
      Click me!!!
    </button>
  )
}

export default Button