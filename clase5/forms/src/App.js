import React, { Component } from 'react'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Contact from './components/Contact'

class App extends Component {
  state = {
    firstName: '',
  }

  handleFirstName = (event) => {
    this.setState({firstName: event.target.value})
  }

  onSubmit(event) {
    console.log('submit');
    event.preventDefault();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4">
            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                value={this.state.firstName}
                onChange={event => this.handleFirstName(event)}/>
              <button type="submit" className="submit">Enviar</button>
            </form>

            <Contact />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
