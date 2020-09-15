// libs
import React from "react";
import {
  VideoCameraOutlined,
  FormOutlined,
  FileProtectOutlined
} from "@ant-design/icons";
// others
import CONSTANTS from "@/constants";

const menuItems = [
  {
    id: 1,
    contentMenu: "My Request",
    iconMenu: <FormOutlined className="link-menu-color-myrequest" />,
    linkMenu: CONSTANTS.ROUTERS.HOME
  },
  {
    id: 2,
    contentMenu: "Assign Request",
    iconMenu: <FileProtectOutlined className="link-menu-color-assign" />,
    linkMenu: CONSTANTS.ROUTERS.ASSIGN_REQUEST
  },
  {
    id: 3,
    contentMenu: "nav 2",
    iconMenu: <VideoCameraOutlined />,
    linkMenu: CONSTANTS.ROUTERS.MY_REQUEST
  }
];

export default menuItems;
