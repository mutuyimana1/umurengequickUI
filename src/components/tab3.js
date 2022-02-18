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
      
      <SubMenu title="Kuwa mbere">
      <Menu.Item disabled>
        <p>8:00 - 9:00</p>
        <p>Inama y'umunsi</p>
      </Menu.Item>
      <Menu.Item>
      <p>9:00 - 12:00</p>
      <p>Kwakira Abaturage</p>
      <Button onClick={() => openNotificationWithIcon('success')}>Mpisemo</Button>

      </Menu.Item>
    </SubMenu>
      <Menu.Item>Kuwa Kabiri</Menu.Item>
      <Menu.Item>Kuwa Gatatu</Menu.Item>
      <Menu.Item>Kuwa Kane</Menu.Item>
      

    </Menu.ItemGroup>
    <SubMenu title="sub menu">
      <Menu.Item disabled>
        <p>8:00 - 9:00</p>
        <p>Inama y'umunsi</p>
      </Menu.Item>
      <Menu.Item>
      <p>9:00 - 12:00</p>
      <p>Kwakira Abaturage</p>
      <p>Available seats: 5/10</p>

      </Menu.Item>
    </SubMenu>
    <SubMenu title="Kuwa Gatandatu" disabled>
      <Menu.Item>5d menu item</Menu.Item>
      <Menu.Item>6th menu item</Menu.Item>
    </SubMenu>
  </Menu>
);

const Days=()=>{
  return(
  <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Kanda hano maze uhitemo <DownOutlined />
    </a>
  </Dropdown>
   )
  }
  export default Days;
