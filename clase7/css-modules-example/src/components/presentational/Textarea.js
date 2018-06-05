import React from 'react'
import styles from './../presentational/Textarea.css'

export default class Textarea extends React.Component {
  render() {
    return (
      <textarea 
        className={styles.Textarea}
        cols="30" 
        rows="10"></textarea>
    )
  }
}