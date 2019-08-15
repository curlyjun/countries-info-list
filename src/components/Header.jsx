import React from 'react';
import styled from 'styled-components';
import AddCountryButton from '../containers/AddCountryButton';
import SearchBox from '../containers/SearchBox';

const MyHeader = styled.header`
  width: 100%;
  height: 200px;
  background: green;
`;

const Header = () => {
  return (
    <MyHeader>
      <SearchBox />
      <AddCountryButton />
    </MyHeader>
  );
};

export default Header;
