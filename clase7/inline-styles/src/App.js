import React, { Component } from 'react';
import { StyleRoot } from 'radium'
import ButtonRadium from './components/ButtonRadium'

class App extends Component {
  state = {
    fontSize: 10,
  }

  handleOnChange = (e) => {
    console.log(e.target.value);
    this.setState({ fontSize: Number(e.target.value) })
  }

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
            <input
              type="text"
              style={{fontSize: this.state.fontSize}}
              onChange={this.handleOnChange}/>
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
