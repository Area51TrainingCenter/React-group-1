import React, { Component } from 'react';
import { StyleRoot } from 'radium'
import ButtonRadium from './components/ButtonRadium'

class App extends Component {
  render() {
    const styles = {
      color: 'red',
      backgroundColor: 'blue',
      fontSize: 16,
      padding: '10px 20px',
    }

    return (
      <StyleRoot>
        <div className="container">
          <div>
            <button style={styles}>Click me!</button>
          </div>
          <div>
            <ButtonRadium />
          </div>
        </div>
      </StyleRoot>
    );
  }
}

export default App;
