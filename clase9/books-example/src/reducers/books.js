const initialState = [
  { title: "Javascript: The Good Parts", pages: 176 },
  { title: "Think of a Number", pages: 432 },
  { title: "Fight Club", pages: 240 },
  { title: "A Game of Thrones", pages: 694 }
]

export default function(state = initialState, action) {
  switch(action.type) {
    case 'UPDATE_BOOKS':
      return action.payload
    default:
      return state
  }
}

// store -> state de toda la aplicación
// reducer -> (state, action) => state

/*

store = {
  books: [],
  state2: reducer2,
  state3: reducer3,
}

*/