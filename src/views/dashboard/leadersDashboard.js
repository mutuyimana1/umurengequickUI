import React, { useState } from "react";
import Dashlayout from "../../components/DashboardLayout";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons"
import leadersInfos from "../../assets/constants/leaders.json"
import usersInfos from "../../assets/constants/users.json"
import { Table, Tag, Space } from 'antd';

import { Drawer } from "antd";


const Column = [
  {
    title: 'EMAIL',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'FIRST NAME',
    dataIndex: 'firstName',
    key: 'firstname',
  },
  {
    title: 'LAST NAME',
    dataIndex: 'lastName',
    key: 'lastname',
  },
  
  {
    title: 'ADDRESS',
    dataIndex: 'address',
    key: 'address',
  },
  
  {
    title: 'PHONE NUMBER',
    dataIndex: 'phone_number',
    key: 'phone_number',
  },
  
  {
    title: 'Action',
    dataIndex: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a style={{ color: "green" }}>Accept</a>
        <a style={{ color: "red" }}>Decline</a>

      </Space>
    )
  },


]


const  AllAPPOINTMENT= () => {
  
  
  return (
    <>
      
      <Dashlayout>
        <h1>APPOINTMENT THIS WEEK</h1>
        <Table columns={Column} dataSource={usersInfos} />
        
      </Dashlayout>
    </>
  )
}
export default AllAPPOINTMENT;