// libs
import React from "react";
import { Button, Badge, Popover, Avatar } from "antd";
import { BellOutlined, UserOutlined } from "@ant-design/icons";
// component
import ContentLogOutPopover from "../ContentLogOutPopover";
// others
import "./style.scss";

const RightHeaderLayout = () => (
  <div className="right-header-wrapper">
    <a href="#hmlt.html">
      <Button className="back-to-hrsol-wrapper">Back To HrSol</Button>
    </a>
    <div className="right-header-notification-wrapper">
      <BellOutlined className="bell-i" style={{ fontSize: 20 }} />
      <Badge size="small" count={5}>
        <p className="head-example" />
      </Badge>
    </div>
    <div className="right-header-avatar-username-wrapper">
      <Avatar style={{ backgroundColor: "#87d068" }} icon={<UserOutlined />} />
    </div>
    <Popover content={ContentLogOutPopover} trigger="click">
      <div className="right-header-username-wrapper">baotien.ho.baotien.ho</div>
    </Popover>
  </div>
);

export default RightHeaderLayout;
