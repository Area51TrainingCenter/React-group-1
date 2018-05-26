import React from 'react'

const withData = url => Component => (
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        data: [],
      }
    }

    componentDidMount() {
      console.log(url);
      
      fetch(url)
        .then(response => response.json())
        .then(data => this.setState({ data }))
    }

    render() {
      return <Component {...this.props} {...this.state} />
    } 
  }
)

export default withData