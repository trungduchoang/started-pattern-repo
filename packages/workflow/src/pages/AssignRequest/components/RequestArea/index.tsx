// libs
import React from "react";
// components
import RequestFilter from "@/components/RequestFilter";
import RequestTable from "../RequestTable";
// others
import "./style.scss";

const RequestArea = () => (
  <div className="request-area-wrapper">
    <RequestFilter />
    <RequestTable />
  </div>
);

export default RequestArea;
