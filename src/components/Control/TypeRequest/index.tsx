import React from "react";
import { Select } from "antd";
const { Option } = Select;

const TypeRequest: React.FC = props => {
  const option = [
    <Option key="1" value="1">
      ALL BUSINESS
    </Option>,
    <Option key="2" value="2">
      REQUEST FOR TEAM BUILDING
    </Option>,
    <Option key="3" value="3">
      UPDATE WORKING HOURS
    </Option>,
    <Option key="4" value="4">
      REQUEST FOR SUPPLY
    </Option>,
    <Option key="5" value="5">
      PROCESS OF APPLYING FOR LEAVE
    </Option>,
    <Option key="6" value="6">
      PAYMENT
    </Option>
  ];
  const handleChange = (value: string) => {
  };
  return (
    <div className="control-select-all-type-wrapper">
      <Select defaultValue="1" style={{ width: 280 }} onChange={handleChange}>
      {option}
      </Select>
    </div>
  );
};

export default TypeRequest;
