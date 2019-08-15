import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import SearchInput from '../components/SearchInput';
import { INTEGRATED_SEARCH_REQUEST } from '../reducers/countriesInfo';

const SearchBox = () => {
  const dispatch = useDispatch();
  const onChangeSearchInput = useCallback(text => {
    dispatch({
      type: INTEGRATED_SEARCH_REQUEST,
      data: text,
    });
  });
  return (
    <>
      <span>통합 검색 : </span>
      <SearchInput onChangeSearchInput={onChangeSearchInput} />
    </>
  );
};

export default SearchBox;
