import React from 'react';
import styled from 'styled-components';

const MyButton = styled.button`
  border-radius: 8px;
  width: 200px;
  height: 100px;
`;

const TestButton = () => {
  return <MyButton>abc</MyButton>;
};

export default TestButton;
