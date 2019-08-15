import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { LOAD_COUNTRIES_INFO_REQUEST } from '../reducers/countriesInfo';
import InfoTable from '../components/InfoTable';
import Header from '../components/Header';
import AddCountryModal from './AddCountryModal';

const ListPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: LOAD_COUNTRIES_INFO_REQUEST,
    });
  }, [dispatch]);

  return (
    <>
      <Header />
      <InfoTable />
      <AddCountryModal />
    </>
  );
};

export default ListPage;
