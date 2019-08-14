import React, { useCallback } from 'react';
import { Modal, Form } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { CLOSE_ADD_COUNTRY_MODAL } from '../reducers/countriesInfo';
import AddCountryForm from './AddCountryForm';

const AddCountryModal = () => {
  const dispatch = useDispatch();
  const { isVisibleAddCountryForm } = useSelector(state => state.countriesInfo);

  const onCancel = useCallback(() => {
    dispatch({
      type: CLOSE_ADD_COUNTRY_MODAL,
    });
  }, [dispatch]);

  return (
    <Modal visible={isVisibleAddCountryForm} onCancel={onCancel} footer={false} destroyOnClose={true}>
      <AddCountryForm />
    </Modal>
  );
};

export default AddCountryModal;
