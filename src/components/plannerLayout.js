import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Planner from './planner';
import './planner.css'
import { Tabs } from 'antd';
import HomeLayout from './homelayout';
import {  Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import UserForm from './userForm';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const PlannerLayout = () => {
  
    return( 
      <>  
      
        
  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="calendar" key="1" style={{ textAlign:"center"}}>
    <Planner/>
      
    </TabPane>
    <TabPane tab="booking" key="2">
      <UserForm/>
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      <Planner/>
    </TabPane>
  </Tabs>

  
  </>
 )
}
export default PlannerLayout;