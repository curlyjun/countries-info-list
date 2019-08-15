import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { LOAD_COUNTRIES_INFO_REQUEST } from '../reducers';
import AddCountryModal from './AddCountryModal';
import { Header, Footer } from '../components';
import InfoTable from './InfoTable';

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
      <Footer />
      <AddCountryModal />
    </>
  );
};

export default ListPage;
