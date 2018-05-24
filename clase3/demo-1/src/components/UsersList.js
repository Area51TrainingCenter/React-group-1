import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserItem from './UserItem';

export default class UsersList extends Component {
  render() {
    const { users } = this.props;

    return (
      <div>
        {
          users.map((user, i) => <UserItem key={i} {...user} />)
        }
      </div>
    )
  }
}

UsersList.propTypes = {
  users: PropTypes.string.isRequired,
}