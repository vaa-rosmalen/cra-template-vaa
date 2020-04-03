import React, { useState } from "react";
import { Layout, Menu, Input, Button } from "antd";
import "./styles.scss";
import { Link, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const { Header: AntdHeader } = Layout;
const { SubMenu } = Menu;

export const Header = () => {
  const [current, setCurrent] = useState<string>();
  const { pathname } = useLocation();

  const name = "John Doe";

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
        prefix={<FontAwesomeIcon icon={faSearch} />}
        placeholder="Zoeken in applicatie"
      />
      <div className="header-logout">
        <span className="header-name">{name}</span>
        <Button
          onClick={() => {
            console.error("logout is not implemented yet.");
          }}
        >
          Uitloggen
        </Button>
      </div>
      <Menu
        onClick={handleClick}
        selectedKeys={current ? [current] : []}
        mode="horizontal"
        className="header-nav"
      >
        <SubMenu
          title={
            <Link to="/users" className="submenu-title-wrapper">
              Users
            </Link>
          }
          key="users"
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
