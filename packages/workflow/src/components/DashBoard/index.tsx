// libs
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { MenuFoldOutlined } from "@ant-design/icons";
// component
import FooterLayout from "./components/FooterLayout";
import RightHeaderLayout from "./components/RightHeaderLayout";
// dataSources
import menuItems from "./dataSources/menuItems";
// others
import "./style.scss";

const { Header, Sider, Content } = Layout;

const DashBoard = (props: any) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapse = () => {
    setCollapsed((collapsed: boolean): boolean => !collapsed);
  };

  useEffect(() => {
    if (window.innerWidth < 1000) setCollapsed(true);
  }, []);

  return (
    <Layout className="layout-ant-wrapper">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Link to="/">
          <div className="logo-wrapper">
            {collapsed ? "HR" : "HrSol WorkFlow"}
          </div>
        </Link>
        <Menu theme="light" mode="inline" defaultSelectedKeys={[]}>
          {menuItems.map(item => (
            <Menu.Item key={item.id} icon={item.iconMenu}>
              <Link to={item.linkMenu}>{item.contentMenu}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <div className="flex-layout-header-wrapper">
            {collapsed ? (
              <MenuFoldOutlined
                className="menu-fold-icon"
                onClick={toggleCollapse}
              />
            ) : (
              <MenuFoldOutlined
                className="menu-fold-icon"
                onClick={toggleCollapse}
              />
            )}
            <RightHeaderLayout />
          </div>
        </Header>
        <Content className="site-layout-background">{props.children}</Content>
        <FooterLayout />
      </Layout>
    </Layout>
  );
};

export default DashBoard;
