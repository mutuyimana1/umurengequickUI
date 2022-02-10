import React from "react";
import {Table,Space} from "antd";
import "antd/dist/antd.css";
import "./shedule.css";
import {EyeOutlined, EditOutlined,DeleteOutlined} from '@ant-design/icons';
import UserContent from "../../assets/constants/users.json";
import Allschedule from '../../assets/constants/shedules.json';
const column=[
    {
        title:"firstName",
        dataIndex:"firstName",
        key:"firstName"
    },
    {
        title:"lastName",
        dataIndex:"lastName",
        key:"lastName"
    },
    {
        title:"email",
        dataIndex:"email",
        key:"email"
    },
    {
        title:"address",
        dataIndex:"address",
        key:"address"
    },
    {
        title:"Identification_card",
        dataIndex:"Identification_card",
        key:"Identificatin_card"
    },
    {
        title:"phine_number",
        dataIndex:"phone_number",
        key:"phone_number"
    },
    {
        title:"gender",
        dataIndex:"gender",
        key:"gender"
    }

]
const columnSecond=[
    {
        title:"user",
        dataIndex:"user",
        key:"user"

    },
    {
        title:"service",
        dataIndex:"service",
        key:"service"

    },{
        title:"seats",
        dataIndex:"seats",
        key:"seats"

    },
    {
        title:"availableSeats",
        dataIndex:"availableSeats",
        key:"availableSeats"

    },
    {
        title:"remainingSeats",
        dataIndex:"remainingSeats",
        key:"remainingSeats"

    },
    {
        title:"startDate",
        dataIndex:"startDate",
        key:"startDate"

    },
    {
        title:"endDate",
        dataIndex:"endDate",
        key:"endDate"

    }
]



const AllShedule=()=>{
    return(
        <>
        <h3 style={{textAlign:'center', fontSize:'40px'}}>AllUsers</h3>
        <Table columns={column} dataSource={UserContent}/>
        <h3 style={{textAlign:'center', fontSize:'40px'}}>Schedules</h3>
        <Table columns={columnSecond} dataSource={Allschedule} style={{border:"none"}}/>
        </>

    )
}
export default AllShedule;
