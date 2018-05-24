import React, { Component } from 'react';
import UsersList from './components/UsersList';
import Spin from './components/Spin';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      isLoading: true,
    }
  }

  componentDidMount() {
    const users = 'https://jsonplaceholder.typicode.com/users'
    fetch(users).then(response => response.json()).then(data => {
      this.setState({
        users: data,
        isLoading: false,
      })
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    const { users, isLoading } = this.state;

    return (
      <section className="section">
        <div className="container">
          {isLoading ? <Spin /> : <UsersList users={users} />}
        </div>
      </section>
    );
  }
}

export default App;
