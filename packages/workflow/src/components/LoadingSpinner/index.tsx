// libs
import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
// others
import "./style.scss";

const LoadingSpinner: React.FC = () => (
  <Spin
    indicator={<LoadingOutlined style={{ fontSize: 60 }} spin />}
    tip="Loading..."
  />
);

export default LoadingSpinner;
