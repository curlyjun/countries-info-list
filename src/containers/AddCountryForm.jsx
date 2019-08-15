import React, { useCallback, useState } from 'react';
import { Form, Input, Icon, Button } from 'antd';
import { useDispatch } from 'react-redux';

import { ADD_COUNTRY_REQUEST, CLOSE_ADD_COUNTRY_MODAL } from '../reducers';

const AddCountryForm = ({ form }) => {
  const dispatch = useDispatch();
  const [id, setId] = useState(0);

  // 국가 전화번호 추가
  const addCallingCode = useCallback(() => {
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(id);
    setId(id + 1);
    form.setFieldsValue({
      keys: nextKeys,
    });
  }, [id]);

  // 국가 전화번호 제거
  const removeCallingCode = useCallback(k => {
    const keys = form.getFieldValue('keys');
    if (keys.length === 1) {
      return;
    }

    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
    });
  });

  form.getFieldDecorator('keys', { initialValue: [] });
  const keys = form.getFieldValue('keys');
  const codesItems = keys.map((k, idx) => (
    <Form.Item key={k} label={idx === 0 ? '국가 전화번호' : ''} required={false}>
      {form.getFieldDecorator(`codes[${k}]`, {
        validateTrigger: ['onChange', 'onBlur'],
        rules: [
          {
            required: true,
            whitespace: true,
            message: '코드를 입력하거나 삭제하십시오.',
          },
        ],
      })(<Input placeholder="코드명" style={{ width: '60%', marginRight: 8 }} type="number" />)}
      {keys.length > 1 ? (
        <Icon className="dynamic-delete-button" type="minus-circle-o" onClick={() => removeCallingCode(k)} />
      ) : null}
    </Form.Item>
  ));

  // 추가
  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      form.validateFields((err, values) => {
        if (!err) {
          const { name, codes, keys, region, capital, alpha2Code } = values;
          const result = { name, region, capital, alpha2Code, callingCodes: keys.map(k => codes[k]) };
          console.log(result);
          dispatch({
            type: ADD_COUNTRY_REQUEST,
            data: result,
          });
          dispatch({
            type: CLOSE_ADD_COUNTRY_MODAL,
          });
        }
      });
    },
    [dispatch],
  );

  return (
    <Form onSubmit={onSubmit}>
      <Form.Item label="이름" hasFeedback>
        {form.getFieldDecorator('name', {
          rules: [
            {
              required: true,
              message: '이름을 입력하세요',
            },
          ],
        })(<Input placeholder="이름" />)}
      </Form.Item>
      {codesItems}
      <Form.Item>
        <Button type="dashed" onClick={addCallingCode} style={{ width: '60%' }}>
          <Icon type="plus" /> 국가 전화번호 추가
        </Button>
      </Form.Item>
      <Form.Item label="대륙" hasFeedback>
        {form.getFieldDecorator('region', {
          rules: [
            {
              required: true,
              message: '대륙을 입력하세요',
            },
          ],
        })(<Input />)}
      </Form.Item>
      <Form.Item label="수도" hasFeedback>
        {form.getFieldDecorator('capital', {
          rules: [
            {
              required: true,
              message: '수도를 입력하세요',
            },
          ],
        })(<Input />)}
      </Form.Item>
      <Form.Item label="코드" hasFeedback>
        {form.getFieldDecorator('alpha2Code', {
          rules: [
            {
              required: true,
              message: '코드를 입력하세요',
            },
          ],
        })(<Input />)}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          추가
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Form.create({})(AddCountryForm);
