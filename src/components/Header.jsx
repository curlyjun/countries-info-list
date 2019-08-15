import React from 'react';
import styled from 'styled-components';
import AddCountryButton from '../containers/AddCountryButton';
import SearchBox from '../containers/SearchBox';

const MyHeader = styled.header`
  width: 100%;
  margin: 20px auto;
`;

const HeaderContents = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <MyHeader>
      <h1 style={{ textAlign: 'center' }}>Countries Info List</h1>
      <HeaderContents>
        <div>
          <SearchBox />
        </div>
        <div>
          <AddCountryButton />
        </div>
      </HeaderContents>
    </MyHeader>
  );
};

export default Header;
