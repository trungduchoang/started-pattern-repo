import React from "react";
import RequestType from "./components/RequestType";
import Status from "./components/Status";
import "./style.scss";
import DateTimePicker from "./components/DateTimePicker";
import InputSearch from "./components/SearchInput";

const RequestFilter: React.FC = () => (
  <div className="request-filter-wrapper">
    <InputSearch />
    <RequestType />
    <Status />
    <DateTimePicker />
  </div>
);

export default RequestFilter;
