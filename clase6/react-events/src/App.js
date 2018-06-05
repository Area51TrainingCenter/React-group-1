import React, { Component } from 'react';

class App extends Component {
  handleClick = (event) => {
    console.log(event.currentTarget);
    console.log(event.target);
    console.log(event.type);
    console.log(event instanceof MouseEvent);
    console.log(event.nativeEvent instanceof MouseEvent);
    
    
    event.preventDefault()
  }

  onHandle = (event) => {
    switch (event.type) {
      case 'click':
        console.log('you clicked');
        break;
      case 'dblclick':
        console.log('you dblclicked');
        break;
      case 'mousedown':
        console.log('you mousedown');
        break;
      default:
        break;
    }
  }

  inputFocus = (event) => {
    event.preventDefault();
    console.log(this.el);
    this.el.style.display = 'none';
    this.bt.innerText = 'Hello'
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
          onClick={this.onHandle}
          onDoubleClick={this.onHandle}
          onMouseDown={this.onHandle}>Click me!</button>

        <form>
          <input
            type="text"
            ref={x => this.el = x}/>
          <button ref={bt => this.bt = bt} type="text" onClick={this.inputFocus}>Click</button>
        </form>
      </div>
    );
  }
}

export default App;
