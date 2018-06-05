import React from 'react'
import ReactDOM from 'react-dom'
import ContactsContainer from '../src/components/container/ContactsContainer'

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<ContactsContainer />, wrapper) : false;