import React, { useCallback } from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';
import TableItem from './TableItem';

const MyTable = styled.table`
  width: 100%;
`;

const InfoTable = () => {
  const { list, isLoadingCountriesInfo } = useSelector(state => state.countriesInfo);

  const onClickTableHeader = useCallback(e => {
    console.log(e.target.id);
  }, []);

  const onClickDelete = useCallback(key => {
    console.log(key);
  }, []);
  return (
    <>
      <MyTable>
        <thead>
          <tr>
            <th onClick={onClickTableHeader} id="name">
              이름
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
