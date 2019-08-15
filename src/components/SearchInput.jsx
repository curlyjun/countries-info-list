import React from 'react';
import { Input } from 'antd';

const SearchInput = ({ onChangeSearchInput }) => {
  const onChange = e => {
    onChangeSearchInput(e.target.value);
  };
  return <Input placeholder="검색" onChange={onChange} />;
};

export default SearchInput;
