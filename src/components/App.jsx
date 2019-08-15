import React from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader/root';

import { ListPage } from '../containers';

const Wrapper = styled.div`
  width: 800px;
  height: 100vh;
  margin: 0px auto;
`;

const App = () => {
  return (
    <Wrapper>
      <ListPage />
    </Wrapper>
  );
};

export default hot(App);
