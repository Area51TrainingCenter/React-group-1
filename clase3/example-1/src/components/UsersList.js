import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserItem from './UserItem'

/**
 * UserList, sirve para hacer el mapeo de los usuarios y renderizar uno por uno
 */
class UsersList extends Component {
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
  users: PropTypes.array,
}

export default UsersList;