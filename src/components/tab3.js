import React from "react";
import TwoHours from "./twoHours";
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

 
const Gahunda=()=>{
    return(
        <div style={{fontSize:"x-large", marginLeft:"20px"}}>
    <Col >
    <div style={{display:"flex"}}>  
    
  <Row style={{ height: "5vh", width:"10%"}}><b>ISAHA /KUWA</b></Row>

  <div>
  <Row style={{marginLeft:"10px", height: "10vh" ,width:"10%", textAlign:"center"}}><b>MBERE</b></Row>
  <TwoHours/>
  </div>
  <Row style={{ height: "10vh", width:"10%"}}><b>KABIRI</b></Row>
  <Row style={{ marginLeft:"0px",height: "10vh", width:"10%"}}><b>GATATU</b></Row>
  <Row style={{marginLeft:"0px", height: "10vh", width:"10%"}}><b>KANE</b></Row>
  <Row style={{marginLeft:"0px", height: "10vh", width:"10%"}}><b>GATANU</b></Row>
  
  </div>
   </Col>
  <div style={{}}>
   
   <Col >  
  <Row style={{ height: "5vh", width:"10%",marginTop:"-3vh", textAlign:"right"}}><b>8:00</b></Row>
  </Col>
  <br></br>
   <Col >  
  <Row style={{ height: "5vh", width:"10%"}}><b>9:00</b></Row>
  </Col> <br></br>
   <Col >  
  <Row style={{ height: "5vh", width:"10%"}}><b>10:00</b></Row>
  </Col> <br></br>
   <Col >  
  <Row style={{ height: "5vh", width:"10%"}}><b>11:00</b></Row>
  </Col> <br></br>
   <Col >  
   <div style={{display:"flex"}}>  

  <Row style={{ height: "5vh", width:"10%"}}><b>12:00</b></Row>
  <Row style={{ backgroundColor:"rgb(231, 223, 211)",height: "5vh", marginLeft:"2vh",width:"38%"}}><b>BREAK</b></Row>
  </div>
  </Col> <br></br>

   <Col >  
  <Row style={{ height: "5vh", width:"10%"}}><b>13:00</b></Row>
  </Col> <br></br>
   <Col >  
  <Row style={{height: "5vh", width:"10%"}}><b>14:00</b></Row>
  </Col> <br></br>
   <Col >  
  <Row style={{height: "5vh", width:"10%"}}><b>15:00</b></Row>
  </Col><br></br>
  <Col >  
  <Row style={{height: "5vh", width:"10%"}}><b>16:00</b></Row>
  </Col>
  </div>
  
   </div>
    )
}
export default Gahunda;
