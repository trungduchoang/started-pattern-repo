// libs
import React from "react";
// components
import RequestTable from "./components/RequestTable";
import AssignRequestTitle from "./components/AssignRequestTitle";
// others
import "./style.scss";

const AssignRequest = () => (
  <div className="assign-request-wrapper">
    <AssignRequestTitle />
    <RequestTable />
  </div>
);

export default AssignRequest;
