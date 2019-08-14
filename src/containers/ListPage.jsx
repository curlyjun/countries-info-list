import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { LOAD_COUNTRIES_INFO_REQUEST } from '../reducers/countriesInfo';
import { Button } from 'antd';

const ListPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: LOAD_COUNTRIES_INFO_REQUEST,
    });
  }, []);

  return (
    <div>
      <Button>ab</Button>
      ListPage
    </div>
  );
};

export default ListPage;
