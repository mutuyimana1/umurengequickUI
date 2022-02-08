import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import { Row, Col } from 'antd';


const Planner = () => {
    return(
  <>
  
    {/* <div style={{display:"flex"}}> */}
    <div style={{fontSize:"x-large", marginLeft:"20px"}}>
    <Col >
    <div style={{display:"flex"}}>  
  <Row style={{ height: "5vh", width:"10%"}}><b>ISAHA /KUWA</b></Row>
  <Row style={{marginLeft:"10px", height: "10vh" ,width:"10%"}}><b>MBERE</b></Row>
  <Row style={{ height: "10vh", width:"10%"}}><b>KABIRI</b></Row>
  <Row style={{ marginLeft:"0px",height: "10vh", width:"10%"}}><b>GATATU</b></Row>
  <Row style={{marginLeft:"0px", height: "10vh", width:"10%"}}><b>KANE</b></Row>
  <Row style={{marginLeft:"0px", height: "10vh", width:"10%"}}><b>GATANU</b></Row>
  
  </div>
   </Col>
  <div style={{}}>
   
   <Col >  
  <Row style={{ height: "5vh", width:"10%",marginTop:"-3vh"}}><b>8:00</b></Row>
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
  <Row style={{ backgroundColor:"rgb(231, 223, 211)",height: "5vh", marginLeft:"2vh",width:"40%"}}><b>BREAK</b></Row>
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
  <div style={{ marginLeft:"230px", marginTop:"-76vh" }}>
  <Col >
  <div style={{display:"flex"}}>
  <Row style={{backgroundColor:"#6ec0fabb", height: "14vh", width:"10%", fontSize:"x-large"}}><b>STAFF MEETING</b></Row>
  
  <Row style={{backgroundColor:"rgb(145, 192, 145)", marginLeft:"20px", height: "32vh", width:"10%", fontSize:"x-large"}}><b>GUHURA N'ABATURAGE</b></Row>
  
  <Row style={{backgroundColor:"rgba(247, 243, 2, 0.295", marginLeft:"20px", height: "32vh", width:"10%", fontSize:"x-large"}}><b>ON FIELD WORK</b></Row>
  <Row style={{backgroundColor:"rgb(231, 223, 211)", height: "14vh",marginLeft:"20px", width:"10%", fontSize:"x-large"}}><b>OTHER</b></Row>
  <Row style={{backgroundColor:"rgba(247, 243, 2, 0.295", height: "60vh",marginLeft:"20px", width:"10%", fontSize:"x-large"}}><b>ON FIELD WORK</b></Row>
  
  </div>
  </Col>
  <Col >

  <div style={{display:"flex"}}>
  <Row style={{backgroundColor:"rgb(145, 192, 145)", height: "14vh", marginTop:"-42vh", width:"10%", fontSize:"x-large"}}><b>GUHURA N'ABATURAGE</b></Row>
  <Row style={{backgroundColor:"rgb(145, 192, 145)", height: "14vh", marginTop:"-42vh", marginLeft:"43vh",width:"10%", fontSize:"x-large"}}><b>GUHURA N'ABATURAGE</b></Row>
  </div>
  </Col>
  <br></br>
  <Col >
  <div style={{display:"flex"}}>
  <Row style={{backgroundColor:"rgb(145, 192, 145)", height: "14vh", width:"10%",marginTop:"-18vh", fontSize:"x-large"}}><b>GUHURA N'ABATURAGE</b></Row>
  
  <Row style={{backgroundColor:"rgba(247, 243, 2, 0.295", marginLeft:"20px", height: "32vh",marginTop:"-18vh", width:"10%", fontSize:"x-large"}}><b>ON FIELD WORK</b></Row>
  
  <Row style={{backgroundColor:"rgb(145, 192, 145)", marginLeft:"20px", height: "32vh",marginTop:"-18vh", width:"10%", fontSize:"x-large"}}><b> GUHURA N'ABATURAGE</b></Row>
  <Row style={{backgroundColor:"#6ec0fabb", marginLeft:"20px", height: "32vh", marginTop:"-18vh",width:"10%", fontSize:"x-large"}}><b>STAFF MEETING</b></Row>
  
  </div>
  </Col>
  <Col >
  <br></br>
  <Row style={{backgroundColor:"rgb(231, 223, 211)", height: "14vh", marginTop:"-16vh", width:"10%", fontSize:"x-large", fontSize:"x-large"}}><b>OTHER</b></Row>
  </Col>
  </div>
  {/* </div> */}
  
  </>
  
);
    }
    export default Planner;