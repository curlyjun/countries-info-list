import React from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader/root';

import ListPage from '../containers/ListPage';

const Wrapper = styled.div`
  width: 800px;
  height: 100vh;
  margin: 0px auto;
  background: rgba(255, 0, 0, 0.1);
`;

const App = () => {
  return (
    <Wrapper>
      <ListPage />
    </Wrapper>
  );
};

export default hot(App);
