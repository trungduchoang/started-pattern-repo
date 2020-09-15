// libs
import React from "react";
// components
import RequestOverview from "./components/RequestOverview";
// import { PageHeader } from "antd";
import RequestTitle from "./components/RequestTitle";
// others
import "./style.scss";

const ViewRequest = (props: any) => {
  return (
    <div className="view-request-wrapper">
      {/* <PageHeader
      className="site-page-header-wrapper"
      onBack={() => props.history.push("/")}
      title="Back My Request"
    /> */}
      <RequestTitle />
      <RequestOverview />
    </div>
  );
};

export default ViewRequest;
