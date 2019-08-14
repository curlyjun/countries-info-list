import React from 'react';
import styled from 'styled-components';
import TestButton from './TestButton';
import ListPage from '../containers/ListPage';

const Wrapper = styled.div`
  background: purple;
`;

const App = () => {
  return (
    <Wrapper>
      <TestButton />
      <a style={{ color: 'red' }}>123</a>
      <ListPage />
    </Wrapper>
  );
};

export default App;
