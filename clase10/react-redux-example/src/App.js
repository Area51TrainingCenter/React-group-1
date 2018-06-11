import React, { Component } from 'react'
import './App.css'

import SearchBar from './containers/SearchBar'
import WeatherList from './containers/WeatherList'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}