import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Button, notification, Space } from 'antd';


const openNotificationWithIcon = type => {
  notification[type]({
    message: 'Urakoze guhitamo',
    description:
      'Musabwe Kuza mbere, gutinda bibarwa nko kutitabira',
  });
};
const { SubMenu } = Menu;

const menu = (
  <Menu>
    <Menu.ItemGroup title="Iki cyumweru (14/02 - 20/02)">

      {/* <SubMenu title="Kuwa mbere"> */}
        <Menu.Item><b> kuwa mbere</b>
           <div style={{"display":"flex"}}>    
        <Menu.Item>
          <p>9:00 - 12:00</p>
          <p>Kwakira Abaturage</p>
          <p>Available seats: 5/10</p>
          <Button onClick={() => openNotificationWithIcon('success')}>Mpisemo</Button>
        </Menu.Item>
        <Menu.Item>
          <p>13:00 - 15:00</p>
          <p>Kwakira Abaturage</p>
          <p>Available seats: 7/10</p>
          <Button onClick={() => openNotificationWithIcon('success')}>Mpisemo</Button>
        </Menu.Item>
        </div> 
        </Menu.Item>
      {/* </SubMenu> */}

      <Menu.Item><b>Kuwa Kabiri</b>
        <div style={{"display":"flex"}}>
      <Menu.Item>
          <p>9:00 - 12:00</p>
          <p>Kwakira Abaturage</p>
          <p>Available seats: 5/10</p>
          <Button onClick={() => openNotificationWithIcon('success')}>Mpisemo</Button>
        </Menu.Item><Menu.Item>
          <p>9:00 - 12:00</p>
          <p>Kwakira Abaturage</p>
          <p>Available seats: 5/10</p>
          <Button onClick={() => openNotificationWithIcon('success')}>Mpisemo</Button>
        </Menu.Item>
        <Menu.Item>
          <p>9:00 - 12:00</p>
          <p>Kwakira Abaturage</p>
          <p>Available seats: 5/10</p>
          <Button onClick={() => openNotificationWithIcon('success')}>Mpisemo</Button>
        </Menu.Item>
        </div>
      </Menu.Item>
      <Menu.Item><b>Kuwa Gatatu</b>
      <div style={{"display":"flex"}}>
        
      <Menu.Item>
          <p>9:00 - 12:00</p>
          <p>Kwakira Abaturage</p>
          <p>Available seats: 5/10</p>
          <Button onClick={() => openNotificationWithIcon('success')}>Mpisemo</Button>
        </Menu.Item> <Menu.Item>
          <p>9:00 - 12:00</p>
          <p>Kwakira Abaturage</p>
          <p>Available seats: 5/10</p>
          <Button onClick={() => openNotificationWithIcon('success')}>Mpisemo</Button>
        </Menu.Item> <Menu.Item>
          <p>9:00 - 12:00</p>
          <p>Kwakira Abaturage</p>
          <p>Available seats: 5/10</p>
          <Button onClick={() => openNotificationWithIcon('success')}>Mpisemo</Button>
        </Menu.Item>
        </div>
      </Menu.Item>
      <Menu.Item><b>Kuwa Kane</b></Menu.Item>


    </Menu.ItemGroup>

    
  </Menu>
);

const Days = () => {
  return (
    <>
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          Kanda hano maze uhitemo <DownOutlined />
        </a>
      </Dropdown>
     
    </>
  )
}
export default Days;
