import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { LOAD_COUNTRIES_INFO_REQUEST } from '../reducers/countriesInfo';
import InfoTable from '../components/InfoTable';
import Header from '../components/Header';
import { Modal } from 'antd';
import AddCountryModal from './AddCountryModal';

const Wrapper = styled.div`
  width: 800px;
  height: 100vh;
  margin: 0px auto;
  background: rgba(255, 0, 0, 0.1);
`;

const ListPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: LOAD_COUNTRIES_INFO_REQUEST,
    });
  }, [dispatch]);

  return (
    <Wrapper>
      <Header />
      <InfoTable />
      <AddCountryModal />
    </Wrapper>
  );
};

export default ListPage;
