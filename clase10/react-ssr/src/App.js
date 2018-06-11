import React, { Component } from 'react'

export default class App extends Component {
  state = {
    message: 'In the server :D'
  }

  render() {
    return (
      <div>
        <div>
          <h1>This is my awesome app with React</h1>
          <h2>{this.state.message}</h2>
        </div>
      </div>
    )
  }
}