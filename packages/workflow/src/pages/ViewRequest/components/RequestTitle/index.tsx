// libs
import React from "react";
import { EyeOutlined } from "@ant-design/icons";
// others
import "./style.scss";

const RequestTitle = () => (
  <div className="request-title-wrapper">
    <EyeOutlined className="eye-outline-icon" />
    <h1 className="title-view-request">Request Detail</h1>
  </div>
);

export default RequestTitle;
