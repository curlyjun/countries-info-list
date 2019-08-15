import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { SearchInput } from '../components';
import { INTEGRATED_SEARCH_REQUEST } from '../reducers';
import { debounce } from '../../utils';

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
      <SearchInput onChangeSearchInput={debounce(onChangeSearchInput, 300)} />
    </>
  );
};

export default SearchBox;
