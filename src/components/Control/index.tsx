import React from "react";
import TypeRequest from "./TypeRequest";
import Status from "./Status";
import "./style.scss";
import DateTimePicker from "./DateTimePicker";

const Control: React.FC = props => {
  return (
    <div className="control__wrapper">
      <TypeRequest />
      <Status />
      <DateTimePicker />
    </div>
  );
};

export default Control;
