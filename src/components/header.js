import React,{useState} from "react";
import logo from "../assets/images/logo.png";
import "./header.css";


import { useNavigate } from "react-router-dom";
import Signup from "./signup";
import Signin from "./signin";

import "antd/dist/antd.css";
import {
  Form,
  Input,
  Button,
  Checkbox,
  InputNumber,
  Modal,
  Select,
  notification,
} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import umurengeApis from "../services/umurengeApis";

const Header = () => {
  const navigate = useNavigate();
  const [visible,setVisible]=useState(false)
  const [visibleSignUp,setVisibleSignUp]=useState(false)
  const [buttonPopup, setButtonPopup] = useState(false);
  const [SignupPopup, setSignupPopup] = useState(false);
  const { Option } = Select;
  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onSearch(val) {
    console.log("search:", val);
  }

  const onFinishSignUp = (values) => {
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
  };
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    umurengeApis.userLogin(values).then((res) => {
      if (!res) {
        return notification.error({ message: "server is down" });
      }
      if (res.status === 200) {
        console.log(res.data.data);
        if(res.data.data.role==="admin"){
          localStorage.setItem("userLogedIn",true);
          navigate("/dashboard");
        }
        else if(res.data.data.role==="user"){
          localStorage.setItem("userLogedIn",true);
          navigate("/dashboard");
        }
        
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
              <div className="bar">
              <a href="/schedule" style={{ color: "rgb(255, 255, 255)" }}>
                {" "}
                Kora Gahunda
              </a>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="/contactUs" style={{ color: "rgb(255, 255, 255)" }}>
                {" "}
                Twandikire{" "}
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                href="#"
                style={{ color: "rgb(255, 255, 255)" }}
                onClick={() => setVisible(true)}
              >
                Kwinjira
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                href="#"
                style={{ color: "rgb(255, 255, 255)", }}
                onClick={() => setVisibleSignUp(true)}
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
        <Modal 
         visible={visible}
         width="30%"
         onOk={()=>setVisible(false)}
         onCancel={()=>setVisible(false)}
         footer={null}
         >
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <div style={{ marginTop: "40px" }}>
              <h2 style={{fontSize:"20px",marginTop:"-10px",
            textAlign:"center"}}>Injira</h2>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="email"
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
            {/* <img src={logo} height="50px" width={"80px" } margin-top={ "-20px"} /> */}

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
                <Button style={{background:"rgb(5, 5, 95)", borderRadius:"10px", color:"white"}}
                 
                  // type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Ohereza
                </Button > 
                cyangwa{" "} <a href="#" onClick={() => setVisibleSignUp(true)} >iyandikishe </a> 
               
              </Form.Item>
            </div>
          </Form>
        </Modal>
       
      </div>
      <Modal
      visible={visibleSignUp}
      width="35%"
      onOk={()=>setVisibleSignUp(false)}
      onCancel={()=>setVisibleSignUp(false)}
      footer={null}
      
      >
      <Form 
      name="normal_login"
      initialValues={{remember:true,}}
      className="login-form">
        <h1>Iyandikishe</h1>
        <Form.Item style={{paddingTop:"15px",fontSize:"2px"}}
              name="firstName" 
              label="Izina rya mbere"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="first name" style={{marginLeft:"15px", width:"228px"}}/>
            </Form.Item>
        <Form.Item
              name="lastName"
              label="Iryakabiri"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input  placeholder="enter last name" style={{marginLeft:"60px", width:"228px"}}/>
            </Form.Item>
            <Form.Item
              name="email"
              label="Imeli"
              rules={[
                {
                  type: "email",
                },
              ]}
            >
              <Input placeholder="enter your email"  style={{marginLeft:"100px", width:"228px"}}/>
            </Form.Item>
            <Form.Item
              name="password"
              label="Ijambo ryibanga"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input  style={{marginLeft:"20px"}}
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password" style={{marginLeft:"15px", width:"220px"}}
              />
            </Form.Item>
            <Form.Item name="address" label="Address">
              <Input placeholder="enter your address"  style={{marginLeft:"80px", width:"208px"}}/>
            </Form.Item>
            <Form.Item name="Identification_card" label="Irangamuntu">
              <Input placeholder="enter your ID" style={{marginLeft:"47px", width:"227px"}}/>
            </Form.Item>
            <Form.Item name="phone_number" label="Telephone">
              <Input placeholder="telephone"  style={{marginLeft:"70px", width:"220px"}}/>
            </Form.Item>

            <Form.Item
              name="gender"
              label="Igitsina"
              rules={[
                {
                  required: true,
                  message: "Please select gender!",
                },
              ]}
            >
              <Select placeholder="select your gender"  style={{marginLeft:"85px", width:"200px"}}>
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
                <Option value="not prefer to say">Not prefer to say</Option>
              </Select>
            </Form.Item>
      
            <Form.Item name="Role" label="Icyushinzwe"> 
            
              <Select
                showSearch
                placeholder="Select your Role"  style={{marginLeft:"64px", width:"200px"}}
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value="Admin">Admin</Option>
                <Option value="Leader">Leader</Option>
                <Option value="User">User</Option>
              </Select>
            </Form.Item>
        <Button 
        // type="primary"
        style={{background:"rgb(5, 5, 95)", borderRadius:"10px", color:"white", marginLeft:"300px"}}
        htmlType="submit"
        className="login-form-button"
        
        >Ohereza

        </Button>
      
      </Form>

      </Modal>
  

    </>
  );
};

export default Header;
