import React from 'react';
import LoaderHOC from './../HOC/LoaderHOC'

const ContactList = ({ contacts, filterText }) => {
  const filteredContacts = contacts.filter(contact => (
    contact.name.indexOf(filterText) !== -1)
  )

  return (
    <ul>
      {
        filteredContacts.map(contact => (
          <li key={contact.email}>
            <img src={contact.thumbnail} role="presentation" />
            <div className="contactData">
              <strong>{contact.name}</strong><br/><small>{contact.email}</small>
            </div>
          </li>
        ))
      }
    </ul>
  )
}

export default LoaderHOC('contacts')(ContactList);