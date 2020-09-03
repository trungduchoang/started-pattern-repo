// libs
import React from "react";
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from "@ant-design/icons";
import { Steps } from "antd";
// components
// others
import "./style.scss";

const StepViewRequest = () => {
    const { Step } = Steps;
    return(
        <Steps size="small" style={{width : 500}}>
            <Step status="finish" description="This is a description." title="Send Request" icon={<UserOutlined />} />
            <Step status="finish" title="Leader Accept" icon={<SolutionOutlined />} />
            <Step status="process" title="HR Accept" icon={<LoadingOutlined />} />
            <Step status="error" title="Done" icon={<SmileOutlined />} />
        </Steps>
    );
}
export default StepViewRequest;