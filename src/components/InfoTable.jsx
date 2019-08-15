import React, { useCallback } from 'react';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import TableItem from './TableItem';
import { DELETE_COUNTRY_REQUEST, SORT_BY_COLUMN } from '../reducers/countriesInfo';
import { Icon, Spin } from 'antd';

const MyTable = styled.table`
  width: 800px;
  max-height: 800px;
  th {
    padding: 10px;
    background: rgba(0, 0, 0, 0.1);
  }
  th:hover {
    cursor: pointer;
    background: rgba(0, 100, 0, 0.1);
  }
  th:last-child {
    cursor: default;
    background: rgba(0, 0, 0, 0.1);
  }
  th,
  td {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

const InfoTable = () => {
  const dispatch = useDispatch();
  const { list, sortBy, sort, isLoadingCountriesInfo } = useSelector(state => state.countriesInfo);

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
    <Spin spinning={isLoadingCountriesInfo}>
      <MyTable>
        <thead>
          <tr>
            <th style={{ width: '25%' }} onClick={onClickTableHeader} id="name">
              이름
              {sortBy === 'name' ? sort ? <Icon type="sort-descending" /> : <Icon type="sort-ascending" /> : null}
            </th>
            <th style={{ width: '25%' }} onClick={onClickTableHeader} id="callingCodes">
              국가 전화번호
              {sortBy === 'callingCodes' ? (
                sort ? (
                  <Icon type="sort-descending" />
                ) : (
                  <Icon type="sort-ascending" />
                )
              ) : null}
            </th>
            <th style={{ width: '12.5%' }} onClick={onClickTableHeader} id="region">
              대륙
              {sortBy === 'region' ? sort ? <Icon type="sort-descending" /> : <Icon type="sort-ascending" /> : null}
            </th>
            <th style={{ width: '12.5%' }} onClick={onClickTableHeader} id="capital">
              수도
              {sortBy === 'capital' ? sort ? <Icon type="sort-descending" /> : <Icon type="sort-ascending" /> : null}
            </th>
            <th style={{ width: '12.5%' }} onClick={onClickTableHeader} id="alpha2Code">
              <span>
                코드
                {sortBy === 'alpha2Code' ? (
                  sort ? (
                    <Icon type="sort-descending" />
                  ) : (
                    <Icon type="sort-ascending" />
                  )
                ) : null}
              </span>
            </th>
            <th />
          </tr>
        </thead>
        <tbody>
          {list.map(item => (
            <TableItem key={item.key} data={item} onClickDelete={onClickDelete} />
          ))}
        </tbody>
      </MyTable>
    </Spin>
  );
};

export default InfoTable;
