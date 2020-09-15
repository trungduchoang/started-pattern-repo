// libs
import React from "react";
import { Result } from "antd";

// Only class components can be error boundaries.
// Reference:  https://reactjs.org/docs/error-boundaries.html#introducing-error-boundaries
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // params: error
  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // eslint-disable-next-line no-console
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Result
          status="error"
          title="Something went wrong"
          subTitle={this.props.errorMessage}
        >
          <a href={"/"}>Back To Home</a>
        </Result>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
