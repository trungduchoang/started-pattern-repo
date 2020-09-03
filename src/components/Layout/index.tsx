// libs
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Badge, Popover } from "antd";

import {
  MenuFoldOutlined,
  VideoCameraOutlined,
  BellOutlined,
  FormOutlined,
  FileProtectOutlined,
  DownOutlined
} from "@ant-design/icons";
import "antd/dist/antd.css";
// component
import FooterLayout from "./FooterLayout";
import ContentLogOutPopover from "./ContentLogOutPopover";
// others
import "./style.scss";

const { Header, Sider, Content } = Layout;

const Home = (props: any) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout className="layout-ant-wrapper">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo-wrapper">
          {collapsed ? "HR" : "HrSol WorkFlow"}
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item
            key="1"
            icon={() => <FormOutlined className="link-menu-color-myrequest" />}
          >
            <Link to="/">My Request</Link>
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<FileProtectOutlined className="link-menu-color-assign" />}
          >
            <Link to="/assignrequest">Assign Request</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<VideoCameraOutlined />}>
            <Link to="/myrequest">nav 2</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <div className="flex-layout-header-wrapper">
            {React.createElement(
              collapsed ? MenuFoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: toggle
              }
            )}
            <a href="#hmlt.html">
              <button className="back-to-hrsol-wrapper">Back To HrSol</button>
            </a>
            <div className="right-header-wrapper">
              <div className="right-header-notification-wrapper">
                <BellOutlined className="bell-i" style={{ fontSize: 20 }} />
                <Badge size="small" count={5}>
                  <p className="head-example" />
                </Badge>
              </div>
              <div className="right-header-avatar-username-wrapper">
                <img
                  src="https://img3.thuthuatphanmem.vn/uploads/2019/10/10/anh-avatar-doremon_033145784.png"
                  alt=""
                />
              </div>
              <Popover content={ContentLogOutPopover} trigger="click">
                <DownOutlined
                  style={{
                    marginRight: 10,
                    color: "#000000",
                    fontSize: "10px"
                  }}
                />
              </Popover>
              <div className="right-header-username-wrapper">
                baotien.ho.baotien.ho
              </div>
            </div>
          </div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            background: "#f4f4f4"
          }}
        >
          {props.children}
        </Content>
        <FooterLayout />
      </Layout>
    </Layout>
  );
};

export default Home;
