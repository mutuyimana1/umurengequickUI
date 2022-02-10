import React from "react";
import {Form, Input,DatePicker,Space,Button, InputNumber} from "antd";
import "./shedule.css"
const NewSchedule=()=>{
    const onFinish=(values)=>{
        console.log(values)
    }
    return(

        <Form onFinish={onFinish} style={{width:"70%",height:"70vh",marginLeft:"200px",padding:"40px",boxShadow:"3px 0px 2px 1px ", }}>
            <Form.Item
            name="user"
            label="userName"
            rules={[{required:true}]}>
                <Input/>
            </Form.Item>
            <Form.Item
            name="service"
            label="service"
            rules={[{required:true}]}
            >
                <Input/>

            </Form.Item>
            <Form.Item
            name="seats"
            label="seats"
            rules={[{required:true}]}
            >
                <Input/>

            </Form.Item>
            <Form.Item
            name="availableSeats"
            label="availableSeats"
            rules={[{required:true}]}
            >
                <Input/>

            </Form.Item>
            <Form.Item
            name="reaminingSeats"
            label="remainingSeats"
            rules={[{required:true}]}
            >
                <Input/>

            </Form.Item>
            <Form.Item
            name="startDate"
            label="startDate"
            rules={[{required:true}]}
            >
                <Input/>

            </Form.Item>
            <Form.Item
            name="endDate"
            label="endDate"
            rules={[{required:true}]}
            >
                <Input/>

            </Form.Item>
            <Button htmlType="submit" type="primary" style={{width:"100px", backgroundColor:"rgb(22, 138, 158)"}}>register</Button>

        </Form>
    )
}

export default NewSchedule;