import React, { useState } from "react";
import { Layout, Menu, Input, Icon } from "antd";
import "./styles.scss";
import { Link, useLocation } from "react-router-dom";

const { Header: AntdHeader } = Layout;
const { SubMenu } = Menu;

export const Header = () => {
  const [current, setCurrent] = useState();
  const { pathname } = useLocation();

  console.log("pathname: ", pathname); // TODO: highlight tab based on pathname

  const handleClick = e => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <AntdHeader
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
        paddingLeft: "2rem",
        paddingRight: "2rem"
      }}
      className="vaa-header"
    >
      <Link to="/" className="header-title">
        Home
      </Link>
      <Input
        prefix={<Icon type="search" />}
        placeholder="Zoeken in applicatie"
      />
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <SubMenu
          title={
            <Link to="/users" className="submenu-title-wrapper">
              Users
            </Link>
          }
          key="client"
        >
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </SubMenu>
        <SubMenu
          title={
            <Link to="/" className="submenu-title-wrapper">
              Submenu 2
            </Link>
          }
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu
          title={<span className="submenu-title-wrapper">Submenu 3</span>}
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu
          title={<span className="submenu-title-wrapper">Submenu 4</span>}
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu
          title={<span className="submenu-title-wrapper">Submenu 5</span>}
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu
          title={<span className="submenu-title-wrapper">Submenu 6</span>}
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    </AntdHeader>
  );
};
