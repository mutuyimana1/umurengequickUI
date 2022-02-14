import React from "react";
import logo from "../assets/images/logo.png";
import "./header.css";

import { useNavigate } from "react-router-dom";

import Signup from "./signup";
import Signin from "./signin";
import { useState } from "react";
import "antd/dist/antd.css";
import {
  Form,
  Input,
  Button,
  Checkbox,
  InputNumber,
  Select,
  notification,
} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import umurengeApis from "../services/umurengeApis";

const Header = () => {
  const navigate = useNavigate();
  const [buttonPopup, setButtonPopup] = useState(false);
  const [SigninPopup, setSigninPopup] = useState(false);
  const { Option } = Select;
  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onSearch(val) {
    console.log("search:", val);
  }

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    umurengeApis.createAccount(values).then((res) => {
      if (!res) {
        return notification.error({ message: "server is down" });
      }
      if (res.status === 200) {
        return notification.success({
          message: "your account created successfully",
        });
      } else {
        return notification.error({
          message: !res.data.error ? res.data.message : res.data.error,
        });
      }
    });
    navigate("#");
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
              name={"firstName"}
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
              name={"lastName"}
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
              name={"email"}
              label="Email"
              rules={[
                {
                  type: "email",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={"password"}
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
            <Form.Item name="address" label="address">
              <Input />
            </Form.Item>
            <Form.Item name="Identification_card" label="Identification-card">
              <Input />
            </Form.Item>
            <Form.Item name="phone_number" label="phone-number">
              <Input />
            </Form.Item>
            
      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
            message: 'Please select gender!',
          },
        ]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
          <Option value="not prefer to say">Not prefer to say</Option>
        </Select>
      </Form.Item>
            <Form.Item name={"Role"} label="Role">
              <Select
                showSearch
                placeholder="Select your Role"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
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
