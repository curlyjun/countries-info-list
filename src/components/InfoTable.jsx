import React, { useCallback } from 'react';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import TableItem from './TableItem';
import { DELETE_COUNTRY_REQUEST, SORT_BY_COLUMN } from '../reducers/countriesInfo';
import { Icon } from 'antd';

const MyTable = styled.table`
  width: 100%;
`;

const InfoTable = () => {
  const dispatch = useDispatch();
  const { list, isLoadingCountriesInfo } = useSelector(state => state.countriesInfo);

  const onClickTableHeader = useCallback(e => {
    console.log(e.target.id);
    dispatch({
      type: SORT_BY_COLUMN,
      data: e.target.id,
    });
  }, []);

  const onClickDelete = useCallback(key => {
    dispatch({
      type: DELETE_COUNTRY_REQUEST,
      data: key,
    });
  }, []);
  return (
    <>
      <MyTable>
        <thead>
          <tr>
            <th onClick={onClickTableHeader} id="name">
              <span>
                이름
                <Icon type="sort-descending" />
              </span>
            </th>
            <th onClick={onClickTableHeader} id="callingCodes">
              국가 전화번호
            </th>
            <th onClick={onClickTableHeader} id="region">
              대륙
            </th>
            <th onClick={onClickTableHeader} id="capital">
              수도
            </th>
            <th onClick={onClickTableHeader} id="alpha2Code">
              코드
            </th>
            <th>-</th>
          </tr>
        </thead>
        <tbody>
          {list.map(item => (
            <TableItem key={item.key} data={item} onClickDelete={onClickDelete} />
          ))}
        </tbody>
      </MyTable>
    </>
  );
};

export default InfoTable;
