import React, { Component } from 'react'

const LoaderHOC = (propsName) => (WrappedComponent) => {
  return class extends Component {
    isEmpty(prop) {
      return (
        prop === null ||
        prop === undefined ||
        (prop.hasOwnProperty('length') && prop.length === 0)
      )
    }

    render() {
      return (
        <div>
          {
            this.isEmpty(this.props[propsName]) ? 
            <div className="loader">Loading...</div> :
            <WrappedComponent {...this.props} />
          }
        </div>
      )
    }
  }
}

export default LoaderHOC