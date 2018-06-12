import React, { Component } from 'react';

import BookListContainer from './containers/BookListContainer';
import BookDetailContainer from './containers/BookDetailContainer';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookListContainer />
        <BookDetailContainer />
      </div>
    );
  }
}