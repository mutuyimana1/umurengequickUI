import React, { useState, useEffect } from "react";
import { Table, Space, Drawer, Skeleton, notification } from "antd";
import "antd/dist/antd.css";
import "./shedule.css";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import UserContent from "../../assets/constants/users.json";
import Allschedule from "../../assets/constants/shedules.json";
import umurengeApis from "../../services/umurengeApis";

const AllUsers = () => {
  const [allUsersData, setAllUsersData] = useState([]);
const [isDrowerVisible, setisDrowerVisible]=useState(false);
  useEffect(() => {
    umurengeApis.getAllUsers().then((res) => {
      console.log(res);
      if(res.status==200){
          setAllUsersData(res?.data.data);
      }
      else{
          return notification.error({
              
          })
      }
      setAllUsersData(res.data.data);
    });
  }, []);


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
        
        <space>
            <a href="">view</a>
            <a href="">Edit</a>
            <a href="" style={{color:"red"}}>Delete</a>

        </space>
    
    )
  },
];
const columnSecond = [
  {
    title: "user",
    dataIndex: "user",
    key: "user",
  },
  {
    title: "service",
    dataIndex: "service",
    key: "service",
  },
  {
    title: "seats",
    dataIndex: "seats",
    key: "seats",
  },
  {
    title: "availableSeats",
    dataIndex: "availableSeats",
    key: "availableSeats",
  },
  {
    title: "remainingSeats",
    dataIndex: "remainingSeats",
    key: "remainingSeats",
  },
  {
    title: "startDate",
    dataIndex: "startDate",
    key: "startDate",
  },
  {
    title: "endDate",
    dataIndex: "endDate",
    key: "endDate",
  },
];


  return (
    <>
      <h3 style={{ textAlign: "center", fontSize: "40px" }}>AllUsers</h3>


      <Table columns={column} dataSource={allUsersData} />
      <h3 style={{ textAlign: "center", fontSize: "40px" }}>Schedules</h3>
      <Table
        columns={columnSecond}
        dataSource={Allschedule}
        style={{ border: "none" }}
      />
       <Drawer>
          

       </Drawer>
    </>

   
  );

};
export default AllUsers;
