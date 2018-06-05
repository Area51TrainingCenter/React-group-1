import React, { Component } from 'react';
import Input from '../presentational/Input'
import Textarea from '../presentational/Textarea'

class ContactsContainer extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    }

    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange(e) {
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <div>
        <div>
          <Input 
            onChange={this.handleOnChange} 
            value={this.state.value} />
        </div>
        <div>
          <Textarea />
        </div>
      </div>
    )
  }
}

export default ContactsContainer