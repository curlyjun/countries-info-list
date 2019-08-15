import React, { useCallback } from 'react';
import { Tag, Button } from 'antd';

const TableItem = ({ data, onClickDelete }) => {
  const onClick = useCallback(() => {
    onClickDelete(data.key);
  }, []);

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
        <Button onClick={onClick} type="danger" icon="delete" shape="circle" />
      </td>
    </tr>
  );
};

export default TableItem;
