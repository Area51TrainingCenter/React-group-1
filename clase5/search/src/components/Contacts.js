import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ContactList from './ContactList'

class Contacts extends Component {
  state = {
    filterText: ''
  }

  handleUserInput = (searchTerm) => {
    this.setState({ filterText: searchTerm })
  }

  render() {
    return (
      <div className="contacts">
        <SearchBar
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput} />
        <ContactList
          contacts={this.props.contacts}
          filterText={this.state.filterText} />
      </div>
    )
  }
}

export default Contacts