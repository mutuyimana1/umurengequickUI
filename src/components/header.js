import React from "react";
import logo from "../assets/images/logo.png";
import "./header.css";


import { useNavigate } from "react-router-dom";

import Signup from "./signup";
import Signin from "./signin"
import { useState } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Checkbox,InputNumber,Select } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const Header = () => {
  const navigate=useNavigate();
  const [buttonPopup, setButtonPopup] = useState(false);
  const [SigninPopup, setSigninPopup]= useState(false);
  const { Option } = Select;
  function onChange(value) {
    console.log(`selected ${value}`);
  }
  
  function onSearch(val) {
    console.log('search:', val);
  }

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    navigate("/userboard");
  };
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  return (
    <>
      <div className="app">
        <main>
          {/* <button onClick={()=>setButtonPopup(true)}>Injira</button> */}
          <div className="header">
            <img src={logo} height="100px" width={"200px"} />
            <h1> UMURENGE QUICK</h1>
            <h2>We Starve To Serve</h2>
            {/* <div ClassName="navbar"> */}
            <div ClassName="navbar-fix">
              <a href="/schedule" style={{ color: "rgb(255, 255, 255)" }}>
                {" "}
                Kora Gahunda
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="/contactUs" style={{ color: "rgb(255, 255, 255)" }}>
                {" "}
                Twandikire{" "}
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                href="#"
                style={{ color: "rgb(255, 255, 255)" }}
                onClick={() => setButtonPopup(true)}
              >
                Kwinjira
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                href="#"
                style={{ color: "rgb(255, 255, 255)" }}
                onClick={() => setSigninPopup(true)}
              >
                Kwiyandikisha
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="/serivisi" style={{ color: "rgb(255, 255, 255)" }}>
                {" "}
                Servisi{" "}
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="/home" style={{ color: "rgb(255, 255, 255)" }}>
                {" "}
                Ahabanza{" "}
              </a>
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
            onFinish={onFinish}
          >
            <div style={{ marginTop: "40px" }}>
              <Form.Item
                name="Username"
                rules={[
                  {
                    required: true,
                    message: "Please input your Username!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
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


                <a
                  className="login-form-forgot"
                  href=""
                  style={{ color: "black" }}
                >
                  Forgot password
                </a>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </Button>
                Or{" "}
                <a
                href="#"
                style={{ color: "rgb(255, 255, 255)" }}
                onClick={() => setSigninPopup(true)}
              >
                Iyandikije nonaha
              </a>
              </Form.Item>
            </div>
          </Form>
        </Signup>
<Signin trigger={SigninPopup} setTrigger={setSigninPopup}>
        <Form {...layout} name="nest-messages" onFinish={onFinish}>
      <Form.Item
        name={['user', 'firstName']}
        label="firstName"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'lastName']}
        label="lastName"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
               name={['user', 'password']}
               label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item
        name={['user', 'address']}
        label="address"
        rules={[
          {
            type:String,
            default: "Rwanda",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'Identification-card']}
        label="Identification-card"
        rules={[
          {
            type:String,
            default: "Rwanda",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user','phone-number']}
        label="phone-number"
        rules={[
          {
            type:String,
            default: "Rwanda",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user','gender']}
        label="gender">
      <Select
    showSearch
    placeholder="Select your gender"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="jack">Female</Option>
    <Option value="lucy">Male</Option>
    <Option value="tom">Not say</Option>
  </Select><br/>
  </Form.Item>
  <Form.Item
        name={['user','Role']}
        label="Role">
  <Select
    showSearch
    placeholder="Select your Role"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="jack">Admin</Option>
    <Option value="lucy">Leader</Option>
    <Option value="tom">User</Option>
  </Select>
  </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </Signin>
      </div>

    </>
  );
};

export default Header;
