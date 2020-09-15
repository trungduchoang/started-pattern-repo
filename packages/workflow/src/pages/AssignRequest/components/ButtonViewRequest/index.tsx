// libs
import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
// types
import { PropsButtonViewRequest } from "@/types/components/AssignRequest";
// others
import CONSTANTS from "@/constants";
import "./style.scss";

// TODO: Refactor me!
const ButtonViewRequest: React.FC<PropsButtonViewRequest> = props => (
  // <Menu style={{ textAlign: "center" }}>
  //   <Menu.Item>
  <Link
    to={{
      pathname: CONSTANTS.ROUTERS.VIEW_ASSIGN_REQUEST,
      state: { requestId: props.record.ID } // TODO: variables's name uses camelCase (ID)
    }}
  >
    <Button style={{ width: 50 }} size="small" type="primary">
      View
    </Button>
  </Link>
  // </Menu.Item>
  // {/* <Menu.Item>
  //     <Button style={{ width: 70 }} size="small" type="primary" ghost>
  //       Approve
  //     </Button>
  //   </Menu.Item>
  //   <Menu.Item>
  //     <Button style={{ width: 70 }} size="small" danger>
  //       Decline
  //     </Button>
  //   </Menu.Item> */}
  // </Menu>
);

export default ButtonViewRequest;
