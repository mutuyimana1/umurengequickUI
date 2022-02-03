import React from "react"

import { Form, Input, DatePicker, Space, InputNumber, Upload, Button } from "antd"
import { UploadOutlined } from '@ant-design/icons';

const NewLeader = () => {
    const OnFinish = (values) => {
        console.log(values);
    }
    return (
        // <Dashlayout>
            <Form onFinish={OnFinish}>
                {/* name":"MUKANTABANA Beatrice",
       "title":"Umuyobozi nshingabikorwa",
       "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
       "address":"KICUKIRO",
       "phone":"+25078678475",
       "profile */}

                <Form.Item name="name" label="NAME" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="title" label="TITLE" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item name="description" label="DESCRIPTION" rules={[{ required: true }]}>
                    <Input.TextArea />
                </Form.Item>
                <Form.Item name="address" label="ADDRESS" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="phone" label="PHONE NUMBER" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
               

                <Form.Item label="Images">
                    <Upload>
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
                </Form.Item>
                
                <br></br>
                <Button htmlType="submit" type="primary">
                    Register Now
                </Button>
            </Form>
        //  </Dashlayout>
    )
}
export default NewLeader;