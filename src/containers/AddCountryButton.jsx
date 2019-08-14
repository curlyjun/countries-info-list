import React, { useCallback } from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { OPEN_ADD_COUNTRY_MODAL } from '../reducers/countriesInfo';

const AddCountryButton = () => {
  const dispatch = useDispatch();
  const onClickAddCountryButton = useCallback(() => {
    dispatch({
      type: OPEN_ADD_COUNTRY_MODAL,
    });
  });

  return <Button onClick={onClickAddCountryButton}>나라 추가하기</Button>;
};

export default AddCountryButton;
