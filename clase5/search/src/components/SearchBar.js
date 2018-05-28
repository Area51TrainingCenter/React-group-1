import React from 'react';

const SearchBar = ({ filterText, onUserInput }) => (
  <input
      type="search"
      placeholder="Search"
      value={filterText}
      onChange={event => onUserInput(event.target.value)} />
);

export default SearchBar;