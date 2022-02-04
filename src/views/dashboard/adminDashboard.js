import React, { useState } from "react";
import Dashlayout from "../../components/DashboardLayout";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons"
import leadersInfos from "../../assets/constants/leaders.json"
import usersInfos from "../../assets/constants/users.json"
import { Table, Tag, Space } from 'antd';
import NewLeader from "../../components/newLeader";
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


];
const Column1 = [
  
  {
    title: 'TITLE',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'NAME',
    dataIndex: 'name',
    key: 'description',
  },
  {
    title: 'PHONE NUMBER',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'ADDRESS',
    dataIndex: 'address',
    key: 'address',
  },
  //   {
  //     title: 'Profile',
  //     dataIndex: 'profile',
  //     key: 'profile',
  // },
  {
    title: 'Action',
    dataIndex: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a><EyeOutlined /> </a>
        <a><EditOutlined /></a>
        <a><DeleteOutlined /></a>
      </Space>
    )
  },

]

const AllBookings = () => {
  const [DrawerVisible, setDrawerVisible] = useState(false)
  const handleclickDrawerVisible = () => {
    setDrawerVisible(true)
  }
  const closedrawerVisible = () => {
    setDrawerVisible(false)
  }
  return (
    <>
      <Drawer placement="right" visible={DrawerVisible} width={1000} onClose={() => closedrawerVisible()}>
        <NewLeader />
      </Drawer>
      <Dashlayout>
        <h1>USERS' CREDENTIALS</h1>
        <Table columns={Column} dataSource={usersInfos} />
        <button onClick={() => handleclickDrawerVisible()}> ADD NEW</button>
        <br></br>
        <h1>LEADERS' CREDENTIALS</h1>
        <Table columns={Column1} dataSource={leadersInfos} />
      </Dashlayout>
    </>
  )
}
export default AllBookings;