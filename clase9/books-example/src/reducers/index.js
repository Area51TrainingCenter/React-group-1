import { combineReducers } from 'redux'
import BooksReducer from './books'
import ActiveBook from './activeBook'

const reducers = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default reducers;