import React from "react";
// components
import RequestOverview from "./components/RequestOverview";
import RequestTitle from "./components/RequestTitle";
// import { PageHeader } from "antd";
// others
import "./style.scss";

const ViewAssignRequest = () => (
  <div className="view-assign-request-wrapper">
    {/* <PageHeader
      className="site-page-header-wrapper"
      onBack={() => router.push("/")}
      title="Back My Request"
    /> */}
    <RequestTitle />
    <RequestOverview />
  </div>
);

export default ViewAssignRequest;
