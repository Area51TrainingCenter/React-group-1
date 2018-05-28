import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import Buttons from './components/Buttons'
import Heading from './components/Heading'

class App extends Component {
  constructor() {
    super();

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);

    this.state = {
      counter: 0,
    }
  }

  handleIncrement() {
    this.setState({ counter: this.state.counter + 1 })
  }

  handleDecrement() {
    this.setState({ counter: this.state.counter - 1 })
  }

  render() {
    const { counter } = this.state;
    return (
      <div className="section">
        <div className="container">
          <Heading text={counter} />
          <Buttons 
            increment={this.handleIncrement}  
            decrement={this.handleDecrement} />
        </div>
      </div>
    );
  }
}

export default App;
