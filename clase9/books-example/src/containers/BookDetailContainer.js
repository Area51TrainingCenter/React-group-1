import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateBooks } from '../actions'

class BookDetailContainer extends Component {
  render() {
    if (!this.props.book) {
      return <div>Select a book to get started.</div>
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
        <button onClick={() => this.props.updateBooks()}>Update Books</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateBooks: updateBooks }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailContainer);