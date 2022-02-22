import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Planner from './planner';
import './planner.css'
import { Tabs } from 'antd';
import UserForm from './userForm';
import Days from './tab3';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const PlannerLayout = () => {

  return (
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="calendar" key="1" style={{ textAlign: "center" }}>
        {/* <Planner /> */}
        <Days/>
      </TabPane>
      <TabPane tab="booking" key="2">
        <UserForm />
      </TabPane>
      {/* <TabPane tab="Number 3" key="3">
        
      </TabPane> */}
    </Tabs>
  )
}
export default PlannerLayout;