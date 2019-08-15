import React from 'react';

const TableItem = ({ data, onClickDelete }) => {
  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.callingCodes}</td>
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
