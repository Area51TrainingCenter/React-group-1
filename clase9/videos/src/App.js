import React, { Component } from 'react'
import VideoContainer from './containers/VideoContainer'
import styles from './styles'

export default class App extends Component {
  render() {
    styles()
    return (
      <div>
        <VideoContainer />
      </div>
    )
  }
}