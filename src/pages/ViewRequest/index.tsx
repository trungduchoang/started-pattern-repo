// libs
import React from "react";
// components
import StepViewRequest from "./StepViewRequest";
import FormViewRequest from "./FormViewRequest";
// others
import "./style.scss";

const ViewRequest = () => (
        <div className="view-request-wrapper">
            <h1 className="title-view-request">Request Detail</h1>
            <div className="current-step-view-request">
                <p>Current Step:</p>
                <StepViewRequest />
            </div>
            <FormViewRequest />
        </div>
    )

export default ViewRequest;