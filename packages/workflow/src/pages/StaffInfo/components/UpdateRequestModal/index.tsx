// libs import
import React, { useState } from "react";
import { Modal, Button, Steps } from "antd";
// components
import UpdateRequestForm from "../UpdateRequestForm";
// others
import "./style.scss";

const { Step } = Steps;

const UpdateRequestModal: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const closeModal = () => {
    setVisible(false);
  };
  const showModal = () => {
    setVisible(true);
  };

  return (
    <div className="update-request-modal-wrapper">
      <Button
        style={{ background: "rgb(0, 194, 146)", border: "none" }}
        onClick={showModal}
        type="primary"
      >
        Update Request
      </Button>
      <Modal
        title={
          <Steps className="padding-step" current={1} size="small">
            <Step title="Finished" />
            <Step title="In Progress" />
            <Step title="Waiting" />
          </Steps>
        }
        visible={visible}
        onCancel={closeModal}
        footer={null}
      >
        <UpdateRequestForm />
      </Modal>
    </div>
  );
};

export default UpdateRequestModal;
