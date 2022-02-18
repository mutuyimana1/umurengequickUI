import React from "react";
import SingleService from "../views/singleService"
import {Drawer} from "antd";
import "antd/dist/antd.css";
const MoreServices =({data})=>{
    const [drawerVisible, setDrawerVisible]= useState(false);
    const handclickDrawerVisible=()=>{
        setDrawerVisible(true)
    }
    const closeDrawerVisible=()=>{
        setDrawerVisible(false)
    }
    return(
        <>
            <Drawer title="More Description" placement="left" visible={drawerVisible} width={720} onClose={closeDrawerVisible}>
               <SingleService data={data}/>
              
    
            </Drawer></>);
}