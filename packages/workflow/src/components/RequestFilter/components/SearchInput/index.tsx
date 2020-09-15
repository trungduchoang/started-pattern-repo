// libs
import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
// others
import "./style.scss";

const SearchInput = () => {
  return (
    <Input
      className="input-control-wrapper"
      size="small"
      placeholder="Search in"
      prefix={
        <SearchOutlined
          style={{ fontSize: 20, marginRight: 10, color: "#72777a" }}
        />
      }
    />
  );
};

export default SearchInput;
