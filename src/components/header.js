import React from "react";
import logo from "../assets/images/logo.png";
import "./header.css";

import { Modal, Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";


import Signup from "./signup"
import {useState} from "react"
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const Header = () => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
    <div className="app">
      <main>
        {/* <button onClick={()=>setButtonPopup(true)}>Injira</button> */}
        <div className="header">

        <img src={logo} height="70px" width={"100px"} />
        <h1> UMURENGE QUICK</h1>
        <h2>We Starve To Serve</h2>
        {/* <div ClassName="navbar"> */}
        <div ClassName="navbar-fix">
          <a href="/#" style={{color:"rgb(255, 255, 255)"}}> Kora Gahunda</a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;



          <a href="#" style={{color:"rgb(255, 255, 255)"}} onClick={()=>setButtonPopup(true)}>Kwinjira</a>

          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="/#" style={{color:"rgb(255, 255, 255)"}}> Iyandikishe </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="/serivisi" style={{color:"rgb(255, 255, 255)"}}> Servisi </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="/home" style={{color:"rgb(255, 255, 255)"}}> Ahabanza </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </div>
        
      </main>
<Signup trigger={buttonPopup} setTrigger={setButtonPopup}>
<Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      // onFinish={onFinish}
    >
      <div style={{marginTop:"40px"}}>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="" style={{color:"black"}}>
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="" style={{color:"black"}}>register now!</a>
      </Form.Item>
      </div>
    </Form>
          
        </Signup>
    </div>
     

      
    </>
  );
};

export default Header;
