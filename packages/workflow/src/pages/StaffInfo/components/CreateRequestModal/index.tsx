// libs import
import React, { useState } from "react";
import { Modal, Button } from "antd";
// components
import CreateRequestForm from "../CreateRequestForm";
// others
import "./style.scss";

const CreateRequestModal: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const closeModal = () => {
    setVisible(false);
  };

  const showModal = () => {
    setVisible(true);
  };

  return (
    <div className="create-request-modal-wrapper">
      <Button
        style={{ background: "rgb(0, 194, 146)", border: "none" }}
        onClick={showModal}
        type="primary"
      >
        Create Request
      </Button>
      <Modal
        visible={visible}
        onCancel={() => {
          closeModal();
        }}
        centered
        footer={null}
        title="Create Request"
      >
        <CreateRequestForm />
      </Modal>
    </div>
  );
};
export default CreateRequestModal;
