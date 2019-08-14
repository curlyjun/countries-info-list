import React from 'react';
import styled from 'styled-components';
import TestButton from './TestButton';

const Wrapper = styled.div`
  background: purple;
`;

const App = () => {
  return (
    <Wrapper>
      <TestButton />
      <a style={{ color: 'red' }}>aa</a>
    </Wrapper>
  );
};

export default App;
