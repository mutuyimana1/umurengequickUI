import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Planner from './planner';
import './planner.css'
import { Tabs } from 'antd';
import UserForm from './userForm';
import gahunda from './tab3';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const PlannerLayout = () => {

  return (
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="calendar" key="1" style={{ textAlign: "center" }}>
        <Planner />
      </TabPane>
      <TabPane tab="booking" key="2">
        <UserForm />
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        <gahunda/>
      </TabPane>
    </Tabs>



  )
}
export default PlannerLayout;