import React from "react";
import logo from "../assets/images/logo.png";
import "./header.css";
import { Modal, Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";


const Header = () => {
  const [visible, setVisible] = useState(true);
  const onFinish = (values) => {
      console.log(values);

      localStorage.setItem();
      navigate("/services");
  };
  
  const navigate = useNavigate();

  return (
    <>
     <Modal
                visible={visible}
                width="40%"
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                
            >
                <h1>Signin Form</h1>
                <Form onFinish={onFinish}>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, type: "email" }]}
                    >
                        <Input type="email"/>
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, type: "password" }]}
                    >
                        <Input type="password"/>
                    </Form.Item>
                    <Button htmlType="submit" onClick={()=>{ localStorage.setItem(); navigate("/services")}}>
                        {""}
                        Login{""}
                    </Button>
                    <p> Don't have an account?</p>
                    
                    <a href="/createaccount">CREATE ACCOUNT</a>
                </Form>
                </Modal>
    
      <div className="header">
        <img src={logo} height="70px" width={"100px"} />
        <h1> UMURENGE QUICK</h1>
        <h2>We Starve To Serve</h2>
        {/* <div ClassName="navbar"> */}
        <div ClassName="navbar-fix">
          <a href="/#"> Kora Gahunda</a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="#" onClick={() => setVisible(true)}>Kwinjira</a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="/#"> Iyandikishe </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="/serivisi"> Servisi </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="/home"> Ahabanza </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </div>

      
    </>
  );
};

export default Header;
