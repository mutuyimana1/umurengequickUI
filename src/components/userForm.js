import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Form, Input, InputNumber, Button } from 'antd';

const UserForm = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  /* eslint-disable no-template-curly-in-string */

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  /* eslint-enable no-template-curly-in-string */



  return (
    // <div style={{ backgroundColor:"blueviolet"}} >
    <Form style={{ margin: "10vh 50vh 50vh 20vh", width: "50%", fontSize: "x-large" }} {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} >
      <Form.Item
        name={['user', 'name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'address']}
        label="Address"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'phone number']}
        label="Phone Number"
        
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name={['user', 'ID']} label="ID"
        rules={[
          {
            required:true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name={['user', 'introduction']} label="Icyo wavuga">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    // </div>
  );
};
export default UserForm;
