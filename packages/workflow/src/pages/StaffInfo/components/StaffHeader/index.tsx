// libs import
import React from "react";
import { FormOutlined } from "@ant-design/icons";
// import RequestFilter from "@/components/RequestFilter";
// components
import CreateRequestModal from "../CreateRequestModal";
// others
import "./style.scss";

// TODO: BEM
const StaffHeader: React.FC = () => (
  <div className="StaffHeader">
    <div className="StaffHeader__top">
      <div className="StaffHeader__top-title">
        <FormOutlined className="staff-header-icon" />
        My Requests
      </div>
      <CreateRequestModal />
    </div>
    <div className="StaffHeader__bottom">{/* <RequestFilter /> */}</div>
  </div>
);

export default StaffHeader;
