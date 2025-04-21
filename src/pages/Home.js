import React from 'react';
import { DatePicker, Form, Input, Button, Checkbox } from 'antd';
import { useGlobalState } from '../provider/GlobalStateContext';
const { RangePicker } = DatePicker;

function Home() {
  const {name}=useGlobalState()
  const onFinish = values => console.log('Success:', values);
  const onFinishFailed = errorInfo => console.log('Failed:', errorInfo);

  return (
    <>
    <h1>{name}</h1>
      <h2>Form Example</h2>
      <RangePicker />
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="Username" name="username" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Password" name="password" rules={[{ required: true }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default Home;
