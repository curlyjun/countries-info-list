import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import { Icon, Spin } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { TableItem } from '../components';
import { DELETE_COUNTRY_REQUEST, SORT_BY_COLUMN, LOAD_MORE_ITEMS } from '../reducers';

const TableContainer = styled.div`
  height: 600px;
  overflow-y: auto;
  table {
    border-collapse: collapse;
    width: 100%;
  }
  th {
    position: sticky;
    top: 0;
    background: skyblue;
    font-size: 20px;
  }
  th:hover {
    cursor: pointer;
    background: rgba(0, 100, 0, 0.1);
  }
  th:last-child {
    cursor: default;
    background: skyblue;
  }
  .ant-btn {
    position: inherit;
  }
`;

const InfoTable = () => {
  const dispatch = useDispatch();
  const { list, sortBy, sort, isLoadingCountriesInfo } = useSelector(state => state);
  const tb = useRef();

  const onClickTableHeader = useCallback(e => {
    tb.current.scrollTop = 0;
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

  const onScroll = useCallback(
    e => {
      let scrollHeight = Math.max(e.target.scrollHeight, document.body.scrollHeight);
      let scrollTop = Math.max(e.target.scrollTop, document.body.scrollTop);
      let clientHeight = e.target.clientHeight;

      if (scrollTop + clientHeight === scrollHeight) {
        dispatch({
          type: LOAD_MORE_ITEMS,
        });
      }
    },
    [dispatch],
  );
  return (
    <Spin spinning={isLoadingCountriesInfo}>
      <TableContainer className="test" onScroll={onScroll} ref={tb}>
        <table>
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
                코드
                {sortBy === 'alpha2Code' ? (
                  sort ? (
                    <Icon type="sort-descending" />
                  ) : (
                    <Icon type="sort-ascending" />
                  )
                ) : null}
              </th>
              <th />
            </tr>
          </thead>
          <tbody>
            {list.map(item => (
              <TableItem key={item.key} data={item} onClickDelete={onClickDelete} />
            ))}
          </tbody>
        </table>
      </TableContainer>
    </Spin>
  );
};

export default InfoTable;
