import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  handleClick = (e) => {
    console.log(e.type);
    console.log(e.currentTarget);
    console.log(e.target);
    e.preventDefault();
  }

  handleEvent(event) {
    switch (event.type) {
      case 'click':
        console.log('clicked')
        break
      case 'dblclick':
        console.log('double clicked')
        break
      default:
        console.log('unhandled', event.type)
    }
  }

  render() {
    return (
      <div className="App">
        <form onClick={this.handleClick}>
          <div>
            <button>click me and see my properties!</button>
          </div>
        </form>
        <button
          onClick={this.handleEvent}
          onDoubleClick={this.handleEvent}>click me and see the event</button>
      </div>
    );
  }
}

export default App;
