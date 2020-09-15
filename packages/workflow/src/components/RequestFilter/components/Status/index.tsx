import React from "react";
import { Select } from "antd";
const { Option } = Select;

const Status: React.FC = props => {
  const option = [
    <Option key="1" value="1">
      Passed
    </Option>,
    <Option key="2" value="2">
      Fail
    </Option>,
    <Option key="3" value="3">
      Pending
    </Option>
  ];
  const handleChange = (value: string) => {
    console.log(`selected`);
  };
  return (
    <div className="control-select-all-status-wrapper">
      <span className="request-filter-wrapper-title">Status</span>
      <Select defaultValue="1" style={{ width: 100 }} onChange={handleChange}>
        {option}
      </Select>
    </div>
  );
};

export default Status;
