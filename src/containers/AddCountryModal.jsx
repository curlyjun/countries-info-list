import React, { useCallback } from 'react';
import { Modal } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { CLOSE_ADD_COUNTRY_MODAL } from '../reducers/countriesInfo';

const AddCountryModal = () => {
  const dispatch = useDispatch();
  const { isVisibleAddCountryForm } = useSelector(state => state.countriesInfo);

  const onCancel = useCallback(() => {
    dispatch({
      type: CLOSE_ADD_COUNTRY_MODAL,
    });
  }, [dispatch]);

  return (
    <Modal visible={isVisibleAddCountryForm} onCancel={onCancel}>
      <div>모달</div>
    </Modal>
  );
};

export default AddCountryModal;
