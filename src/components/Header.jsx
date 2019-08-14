import React from 'react';
import styled from 'styled-components';
import SearchInput from '../containers/SearchInput';
import AddCountryButton from '../containers/AddCountryButton';

const MyHeader = styled.header`
  width: 100%;
  height: 200px;
  background: green;
`;

const Header = () => {
  return (
    <MyHeader>
      <SearchInput />
      <AddCountryButton />
    </MyHeader>
  );
};

export default Header;
