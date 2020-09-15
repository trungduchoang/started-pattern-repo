// libs
import React from "react";
// components
import StepViewRequest from "@/components/StepViewRequest";
import ViewAssignRequestForm from "../ViewAssignRequestForm";
// others
import "./style.scss";

const RequestOverview = () => (
  <div className="request-area-wrapper">
    <StepViewRequest />
    <ViewAssignRequestForm />
  </div>
);
export default RequestOverview;
