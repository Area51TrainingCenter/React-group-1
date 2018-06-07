import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'

const counter = (state = 0, action) => {
  switch(action.type) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state -1
    default:
      return state
  }
}

const users = (state = [], action) => {
  switch(action.type) {
    case 'add_user':
      return [...state, {
        id: Date.now(),
        name: action.user,
        isAnEngineer: true,
      }]
    case 'toggle_property':
      const newState = state.map(user => (
        user.id === action.id ? Object.assign({}, user, {isAnEngineer: !user.isAnEngineer}) : user
      ))
      return newState
    default:
      return state;
  }
}

class App extends Component {
  render() {
    const { counter, users } = store.getState();

    return (
      <div>
        <div>
          <h1>{counter}</h1>
          <button onClick={() => store.dispatch({type: 'increment'})}>+</button>
          <button onClick={() => store.dispatch({type: 'decrement'})}>-</button>
        </div>
        <div>
          <input type="text" ref={user => this.user = user}/>
          <button onClick={() => {
            store.dispatch({
              type: 'add_user', 
              user: this.user.value})
            this.user.value = ''
            this.user.focus()
            }}>Add user</button>
        </div>
        <div>
          {
            users.map(user => (
              <div 
                style={{color: user.isAnEngineer ? 'blue' : 'red'}} 
                key={user.id} 
                onClick={() => store.dispatch({type: 'toggle_property', id: user.id})}>{user.name}</div>)
            )
          }
        </div>
      </div>
    )
  }
}

const reducers = combineReducers({
  counter,
  users,
})
const store = createStore(reducers);
const root = document.getElementById('root')
const render = () => {
  ReactDOM.render(<App />, root)
  console.log(store.getState())
}

store.subscribe(render)
render()