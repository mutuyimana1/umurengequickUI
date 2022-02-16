import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import "./header.css";
import "antd/dist/antd.css";
import { Form, Input, Button, Checkbox, InputNumber, Select, Space } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Modal from "antd/lib/modal/Modal";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const { Option } = Select;
  const onFinish = (values) => {
    console.log(values);
    localStorage.setItem("userLogedIn", true);
    navigate("/#");
    localStorage.setItem("registerFoundDoc", true)
    // navigate("/founder/allDocument")
  };
   const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  function onChange(value) {
    console.log(`selected ${value}`);
  }
  
  function onSearch(val) {
    console.log('search:', val);
  }


  return (
    <>
      <div className="hhh">
        <main>
          {/* <button onClick={()=>setButtonPopup(true)}>Injira</button> */}
          <div className="header">
            <img src={logo} height="100px" width={"200px"} />
            <h1> UMURENGE QUICK</h1>
            <h2>We Starve To Serve</h2>
            {/* <div ClassName="navbar"> */}
            <div ClassName="navbar">
            <div className="navbar-fix">
            {/* <a href="/aboutus"> About Us</a> */}

              <a href="/schedule" >
                Kora Gahunda
              </a>
              <a href="/contactUs" >
                Twandikire
              </a>
              <a
                href="#"
                onClick={() => setIsModalVisible(true)}
              >
                Kwinjira
              </a>
              <a
                href="#"
                onClick={() => setVisible(true)}

              >
                Kwiyandikisha
              </a>
              <a href="/serivisi">
                Servisi
              </a>
              <a href="/home" >
                Ahabanza
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            </div>
          </div>
        </main>
      </div>
      <div className="modal">
        <Modal
          onClose={() => setIsModalVisible(false)}
          onOk={() => setIsModalVisible(false)}
          onCancel={() => setIsModalVisible(false)}
          visible={isModalVisible}
          width="35%"
          footer={null}
          //  height="200vh"
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
        // onFinish={onFinish}
        ><br></br><br></br>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <div className="drower-flex">
              <div className="dorwer-log">
                <img src={logo} height="80px" width={"130px"} />
              </div>
              <div className="login">
                <h style={{ color: "rgb(22, 138, 158)" }}> Kwiyandikisha</h>
              </div>
            </div><br></br><br></br>

            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Andika izina ukoresha" />
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
              placeholder=" Andika ijambo ry'ibanga"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Nyibuka</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="" style={{ color: "rgb(22, 138, 158)" }}>
              Wibagiwe ijambo ry'ibanga
            </a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" style={{ backgroundColor: "rgb(22, 138, 158)" }}>
              Injira
            </Button>
            <Space>
              Nta konti ufite? <a style={{ color: "rgb(22, 138, 158)" }} href="#"  onClick={() => setVisible(true)} >Yifungure!</a>
            </Space>

          </Form.Item>
        </Modal>
      </div>

      
      <div className="modal">
        <Modal
          visible={visible}
          width="30%"
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
          footer={null}
          //  height="200vh"
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
        onFinish={onFinish}
        >

         <div className="drower-flex">
              <div className="dorwer-log">
                <img src={logo} height="80px" width={"130px"} />
              </div>
              <div className="login">
                <h style={{ color: "rgb(22, 138, 158)" }}> Sign Up</h>
              </div>
            </div><br></br><br></br>

             <Form {...layout} name="nest-messages" onFinish={onFinish}>
      <Form.Item
        name={['user', 'firstName']}
        label="Izina ry'irikristu"
        rules={[
          {
            required: true,
            message:" Nyamuneka amazina arakenewe!"
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'lastName']}
        label="Izina ry'ababyeyi"
        rules={[
          {
            required: true,
            message:" Nyamuneka amazina arakenewe!"
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Imeli"
        rules={[
          {
            type: 'email',
            required:true,
            message:" Nyamuneka andika Imeli yawe!"
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
               name={['user', 'password']}
               label="Ijambo ry'ibanga"
                rules={[
                  {
                    required: true,
                    message: "Nyamuneka andika ijambo ryibanga!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Ijambo ry'ibanga"
                />
              </Form.Item>
              <Form.Item
        name={['user', 'address']}
        label="Aderesi"
        rules={[
          {
            type:String,
            require:true,
            message:"Nta aderesi mwatanze!",
            default: "Rwanda",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'Identification-card']}
        label="Nimero yindangamuntu"
        rules={[
          {
            type:String,
            required: true,
            default: "Rwanda",
            message:" Nimero yindangamuntu irakenewe!"
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user','phone-number']}
        label="Nimero ya telefoni"
        rules={[
          {
            type:String,
            required:true,
            message:" Nta nimero ya telefoni watanze!",
            default: "Rwanda",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user','gender']}
        label="Igitsina">
      <Select
    showSearch
    placeholder="Hitamo igitsina cyawe"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="jack">Gore</Option>
    <Option value="lucy">Gabo</Option>
    <Option value="tom">Ndifashe</Option>
  </Select><br/>
  </Form.Item>
  <Form.Item
        name={['user','Role']}
        label="Role">
  <Select
    showSearch
    placeholder="Hitamo uruhare rwawe"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="jack">Admin</Option>
    <Option value="lucy">Umuyobozi</Option>
    <Option value="tom">umukoresha</Option>
  </Select>
  </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button style={{ backgroundColor: "rgb(22, 138, 158)" }} type="primary" htmlType="submit">
          Ohereza
        </Button>
      </Form.Item>
    </Form>


        </Modal>
      </div>

    </>
  )
};

export default Header;