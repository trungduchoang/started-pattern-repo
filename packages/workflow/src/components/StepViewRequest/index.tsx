// libs
import React from "react";
import { Steps, Popover } from "antd";
// components
// others
import "./style.scss";

const customDot = (dot: any, { status, index }: any) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);

const StepViewRequest = () => {
  const { Step } = Steps;
  return (
    <div className="content-step-view-request">
      <Steps
        // style={{ width: 700 }}
        size="small"
        current={1}
        progressDot={customDot}
      >
        <Step title="Leader Review" />
        <Step title="HR Review" />
        <Step title="Pass" />
      </Steps>
    </div>
  );
};
export default StepViewRequest;
