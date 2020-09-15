// libs
import React, { useState } from "react";
import { Button, Form, message, Modal, Input } from "antd";
// hooks
import { useRouter } from "@/hooks";
// others
import CONSTANTS from "@/constants";
import "./style.scss";

const { TextArea } = Input;

const ViewAssignRequestModal = () => {
  // get router
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const closeModal = (e: any) => {
    console.log(e);
    setVisible(false);
  };

  const handleOk = () => {
    setVisible(false);
    message.success("Success", 0.3);
    router.push(CONSTANTS.ROUTERS.ASSIGN_REQUEST);
  };

  return (
    <div className="view-assign-request-modal-wrapper">
      <Button
        onClick={showModal}
        style={{ display: "inline" }}
        type="primary"
        htmlType="button"
        danger
      >
        Decline
      </Button>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleOk}
        onCancel={closeModal}
      >
        <Form>
          <Form.Item
            name={["user", "title"]}
            label="Content"
            rules={[{ required: true }]}
          >
            <TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ViewAssignRequestModal;
