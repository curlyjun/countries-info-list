import React from 'react';
import { Tag } from 'antd';

const TableItem = ({ data, onClickDelete }) => {
  return (
    <tr>
      <td>{data.name}</td>
      <td>
        {data.callingCodes.map((code, idx) => (
          <Tag key={idx}>{code}</Tag>
        ))}
      </td>
      <td>{data.region}</td>
      <td>{data.capital}</td>
      <td>{data.alpha2Code}</td>
      <td>
        <button onClick={() => onClickDelete(data.key)}>삭제</button>
      </td>
    </tr>
  );
};

export default TableItem;
