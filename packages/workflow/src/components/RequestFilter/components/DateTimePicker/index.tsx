import React, { useState } from "react";
import { Select, DatePicker, Popover, Button } from "antd";
import "./style.scss";

const { Option } = Select;
const { RangePicker } = DatePicker;

const DateTimePicker: React.FC = props => {
  const [customRange, setCustomRange] = useState(false);

  const option = [
    <Option key="1" value="1">
      THIS WEEK
    </Option>,
    <Option key="2" value="2">
      THIS MONTH
    </Option>,
    <Option key="3" value="3">
      CUSTOM RANGE
    </Option>
  ];
  const handleChange = (value: string) => {
    if (value === "3") {
      setCustomRange(true);
    } else {
      setCustomRange(false);
    }
  };
  return (
    <div className="control-select-all-datetime-wrapper">
      <span className="request-filter-wrapper-title">Time</span>
      <Popover
        content={
          <>
            <RangePicker />
            <Button
              onClick={() => setCustomRange(false)}
              style={{ marginLeft: 10 }}
              size="small"
              type="primary"
            >
              Clear
            </Button>
          </>
        }
        trigger="click"
        placement="bottom"
        visible={customRange}
        style={{ marginTop: 200 }}
      >
        <Select defaultValue="1" style={{ width: 150 }} onChange={handleChange}>
          {option}
        </Select>
      </Popover>
    </div>
  );
};

export default DateTimePicker;
