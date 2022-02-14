import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './dashstyle.css';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  HomeOutlined,
} from '@ant-design/icons';
// import { whileStatement } from '@babel/types';
// import { faThLarge } from '@fortawesome/free-solid-svg-icons';
const { Header, Sider, Content } = Layout;
const DashboardLayout=({children})=>{
    const [collapsed ,setCollapsed]=useState(false);
    const toggle=()=>{
        setCollapsed(!collapsed)
    }
    return(
        <Layout title='admin dashboard'>
          <div className="sidebar" >
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu style={{backgroundColor:"aliceblue"}} className="sidebar" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined style={{fontSize: "25px"}} />}>
              <Link to="/dashboard/schedule" style={{fontSize:'20px', marginLeft:"60px"}}>create schedule</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined style={{fontSize: "25px"}}/>}>
            <Link to="/dashboard/allschedule"  style={{fontSize:'18px',padding:"30px"}} > Manage All schedule</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<VideoCameraOutlined style={{fontSize: "25px"}} />}onClick={()=>
            localStorage.removeItem("")}>
             <Link to="#"style={{fontSize:'23px', padding:"30px"}} >view online user</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined style={{fontSize: "25px", padding:"30px"}} />}onClick={()=>
           localStorage.removeItem("userLogedIn")}>
             <Link to="/home"style={{fontSize:'20px',padding:"120px"}} >Logout</Link>
            </Menu.Item>
          </Menu>
          <Link to="/home" style={{textAlign:'center', color:'white', fontSize:"25px"}}><HomeOutlined/> Home</Link>
        </Sider>
        </div>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
             
          
            
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 84,
              minHeight: 680,
              
            
            }}
            
          >
            {children}
          </Content>
        </Layout>
      </Layout>

    )
    
}
export default DashboardLayout;