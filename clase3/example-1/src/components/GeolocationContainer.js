import React, { Component } from 'react'
import GeolocationPresentational from './GeolocationPresentational'

export default class GeolocationContainer extends Component {
  constructor() {
    super();
    this.state = {
      lat: null,
      lng: null,
    }

    this.getLocation = this.getLocation.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.getLocation)
  }

  getLocation({ coords }) {
    this.setState({
      lat: coords.latitude,
      lng: coords.longitude,
    });
  }

  render() {
    return <GeolocationPresentational {...this.state} />
  }
}