import React, { useState, useEffect } from "react";
import { Table, Space, Drawer, Skeleton, notification } from "antd";
import "antd/dist/antd.css";
import "./shedule.css";
import DashboardLayout from "../../components/DashboardLayout";
import UserContent from "../../assets/constants/users.json";

const OnlineUser=()=>{
    const column = [
        {
          title: "First Name",
          dataIndex: "firstName",
          key: "firstName",
        },
        {
          title: "Last Name",
          dataIndex: "lastName",
          key: "lastName",
        },
        {
          title: "Address",
          dataIndex: "address",
          key: "address",
          
        },
        {
          title: "Identification card",
          dataIndex: "Identification_card",
          key: "Identificatin_card",
        },
        {
          title: "phone number",
          dataIndex: "phone_number",
          key: "phone_number",
        },
        
        {
          title: "Action",
          key: "action",
          render: (text,record)=>(
              
              <Space>
                  <a style={{textAlign:"center"}} href="#"
                  onClick={()=>{
                  
                  }}
                  >currently online</a>
                  
                 
      
              </Space>
          
          )
        },
      ];  
      return (
        <DashboardLayout>
          <h3 style={{ textAlign: "center", fontSize: "40px" }}>OnlineUser</h3>
    
    
          <Table columns={column} dataSource={ UserContent} />
          
          
        
        </DashboardLayout>
    
       
      );
}
export default OnlineUser;