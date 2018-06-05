import React, { Component } from 'react';
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Title>
            Hello World, this is my first styled component!
          </Title>
        </Wrapper>
      </Container>
    );
  }
}

const Container = styled.div`
  padding: 20px;
  background: #f2f3f4;
`

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export default App;
