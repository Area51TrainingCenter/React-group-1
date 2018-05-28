import React, { Component } from 'react';
import Contacts from './components/Contacts'

class App extends Component {
  state = {
    contacts: [],
  }

  componentDidMount() {
    const usersAPI = 'https://randomuser.me/api/?results=50&nat=us'
    fetch(usersAPI)
      .then(response => response.json())
      .then(data => {
        const contacts = data.results.map(result => Object.assign({}, result, {name: `${result.name.first} ${result.name.last}`}))
        this.setState({ contacts })
      }).catch(e => console.log(e))
  }

  render() {
    return (
      <div className="container">
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
