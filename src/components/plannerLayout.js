import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Planner from './planner';
import './p.css'
import { Tabs } from 'antd';
import HomeLayout from './homelayout';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const PlannerLayout = () => {
    return(   
      <HomeLayout>
        
  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Tab 1" key="1">
    <Planner/>
      
    </TabPane>
    <TabPane tab="Tab 2" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      <Planner/>
    </TabPane>
  </Tabs>
  <div className='color' style={{width:"30%", height:"70vh", float:"right",marginTop:"-80vh" }} >
  <p>mslkmalk</p>
  </div>
  
  </HomeLayout>
 )
}
export default PlannerLayout;