// libs import
import React from "react";
// Component
import StaffBody from "./components/StaffBody";
import StaffHeader from "./components/StaffHeader";
// Others
import "./style.scss";

const StaffInfo = () => (
  <div className="staff-info-wrapper">
    <StaffHeader />
    <StaffBody />
  </div>
);

export default StaffInfo;
