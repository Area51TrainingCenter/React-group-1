import React, { Component } from "react"
import styled from 'styled-components'

class VideoSearch extends Component {
  state = {
    term: ''
  }
  
  handleChange(term) {
    this.setState({ term })
    this.props.onSearchTermChange(term)
  }

  render() {
    return (
      <Wrapper>
        <input
          value={this.state.term}
          onChange={e => this.handleChange(e.target.value)}
        />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  background-color: #576574;
  margin-bottom: 40px;
  text-align: center;

  input {
    border: 1px solid #8395a7;
    color: #8395a7;
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 20px;
    margin: 20px 0;
    outline: 0;
    padding: 10px;
    width: 60%;
    
    &:focus {
      border-color: #54a0ff;
      color: #54a0ff;
      outline: 0:
    }
  }
`

export default VideoSearch