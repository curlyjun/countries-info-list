import React, { useCallback } from 'react';
import { Table, Tag } from 'antd';

import { useSelector } from 'react-redux';

const columns = [
  {
    title: '이름',
    dataIndex: 'name',
  },
  {
    title: '국가 전화번호',
    dataIndex: 'callingCodes',
    render: callingCodes => {
      return (
        <>
          {callingCodes.map(code => (
            <Tag color={'green'} key={code}>
              {code}
            </Tag>
          ))}
        </>
      );
    },
    sorter: (a, b) => a - b,
  },
  {
    title: '대륙',
    dataIndex: 'region',
  },
  {
    title: '수도',
    dataIndex: 'capital',
  },
  {
    title: '코드',
    dataIndex: 'alpha2Code',
  },
];

const InfoTable = () => {
  const { list, isLoadingCountriesInfo } = useSelector(state => state.countriesInfo);

  return (
    <Table dataSource={list} loading={isLoadingCountriesInfo}>
      <Table.Column title="이름" dataIndex="name" key="name" />
      <Table.Column title="국가 전화번호" dataIndex="callingCodes" key="callingCodes" />
      <Table.Column title="대륙" dataIndex="region" key="region" />
      <Table.Column title="수도" dataIndex="capital" key="capital" />
      <Table.Column title="코드" dataIndex="alpha2Code" key="alpha2Code" />
    </Table>
  );
};

export default InfoTable;
