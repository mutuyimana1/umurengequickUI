import React, { useState } from "react";
import "./singleSchedule.css"

import { Drawer } from "antd";
import 'antd/dist/antd.css';
import PlannerLayout from "./plannerLayout";


const SingleSchedule = ({ leader }) => {
    const [DrawerVisible, setDrawerVisible] = useState(false)
    const handleclickDrawerVisible = () => {
        setDrawerVisible(true)
    }
    const closedrawerVisible = () => {
        setDrawerVisible(false)
    }
    return (
        <>
        {/* <div className="flexing"> */}
            <Drawer placement="right" visible={DrawerVisible} width={1000} onClose={() => closedrawerVisible()}>
                <PlannerLayout leader={leader} />
            </Drawer>
            
            <div className="leaders-card" >
                <div className="profile" >
                    <img src={leader?.profile} ></img> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div>
                <h5><b> {leader?.title}</b></h5>

                <h5>Amazina : {leader?.name}</h5>
                
                <h5>numero ya telephone:{leader?.phone}</h5>
                </div>
                </div>
                <h5>Akazi:{leader?.description}</h5>                
                <div  onClose={() => closedrawerVisible()} className="leaders-button">
                <button onClick={() => handleclickDrawerVisible()}> Hitamo umunsi</button>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}
export default SingleSchedule