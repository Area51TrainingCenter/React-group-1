import React from 'react'
import styled from 'styled-components'

export default class Button extends React.Component {
  render() {
    return (
      <Button>
        Click me please!
      </Button>
    )
  }
}

const Button = styled.button`
  background-color: #ff0000;
  width: 320px;
  padding: 20px;
  border-radius: 5px;
  border: none;
  outline: none;
  &:hover {
    color: #fff;
  }
  &:active {
    position: relative;
    top: 2px;
  }
  @media (max-width: 480px) {
    width: 160px;
  }
`