import React from 'react'

const List = ({ data: gists }) => (
  <ul>
    {
      gists.map(gist => <li key={gist.id}>{gist.description}</li>)
    }
  </ul>
)

export default List