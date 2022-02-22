import React, { useState } from "react";
import "./singleSchedule.css";

import { Drawer } from "antd";
import "antd/dist/antd.css";
import PlannerLayout from "./plannerLayout";

const SingleSchedule = ({ leader }) => {
  const [DrawerVisible, setDrawerVisible] = useState(false);
  const handleclickDrawerVisible = () => {
    setDrawerVisible(true);
  };
  const closedrawerVisible = () => {
    setDrawerVisible(false);
  };
  return (
    <>
      {/* <div className="flexing"> */}
      <Drawer
        placement="right"
        visible={DrawerVisible}
        width={600}
        onClose={() => closedrawerVisible()}
      >
        <PlannerLayout leader={leader} />
      </Drawer>

      <div className="leaders-card">
        <div className="profile">
          <div style={{  "height":"42vh",  "paddingRight":"30vh", "paddingLeft":"-30vh",  "overflow":"hidden" }}>
            <img src={leader?.profile}  ></img>
          </div>
          <div className="amagambo">
            <h5 >
              <b> {leader?.title}</b>
            </h5>
            <h5>Amazina : {leader?.name}</h5>
            <h5>Numero ya telephone:{leader?.phone}</h5>
            <h5>Akazi: {leader?.description}</h5> 
            <div onClose={()=> closedrawerVisible()}>           
            <button onClick={() => handleclickDrawerVisible()} >
              Hitamo umunsi
            </button>
            </div>
          </div>
        </div>        
      </div>      
    </>
  );
};
export default SingleSchedule;
