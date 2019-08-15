import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

const SInput = styled(Input)`
  width: 200px;
  margin: 10px 20px;
`;

const SearchInput = ({ onChangeSearchInput }) => {
  const onChange = e => {
    console.log(e.target.value);
    onChangeSearchInput(e.target.value);
  };
  return <SInput placeholder="검색" onChange={onChange} />;
};

export default SearchInput;
