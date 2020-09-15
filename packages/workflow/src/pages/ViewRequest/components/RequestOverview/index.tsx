// libs
import React from "react";
// components
import StepViewRequest from "@/components/StepViewRequest";
import ViewRequestForm from "../ViewRequestForm";
// others
import "./style.scss";

const RequestOverview = () => (
  <div className="request-overview-wrapper">
    <StepViewRequest />
    <ViewRequestForm />
  </div>
);
export default RequestOverview;
