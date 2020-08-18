// libs import
import React from "react";
// others
import "./styles.scss";

/**
 * ErrorInformation
 * TODO: Create ErrorInformation
 */
const ErrorInformation = ({ error = {} }) => (
  <div className="error-information-wrapper">Error: {error.message}</div>
);

const withErrorBoundary = ({ isError, error }) => WrappedComponent =>
  isError ? <ErrorInformation error={error} /> : WrappedComponent;

export default withErrorBoundary;
