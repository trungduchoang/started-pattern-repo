// libs
import React from "react";

// components
import Control from "../../components/Control";
import AssignRequestTable from "./AssignRequestTable";
// others
import "./style.scss";

const AssignRequest = () => (
        <div className="assign-request-wrapper">
            <h1 className="assign-request-title-wrapper">Assign Request</h1>
            <Control/>
            <AssignRequestTable />
        </div>
    )

export default AssignRequest;