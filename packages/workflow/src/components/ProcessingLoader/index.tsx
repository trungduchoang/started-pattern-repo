// libs
import React from "react";
// components
import LoadingSpinner from "../LoadingSpinner";
// others
import "./style.scss";

// TODO: Better Loading
const ProcessingLoader: React.FC = () => (
  <div className="processing-loader-wrapper">
    <LoadingSpinner />
  </div>
);

export default ProcessingLoader;
