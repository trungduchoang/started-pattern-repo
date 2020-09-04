// libs
import React, { useState } from "react";
import { Menu, Button } from "antd";
import Modal from "antd/lib/modal/Modal";
// components
// others
import "./style.scss";

const DropdownMenuRequest = () => {
  const [visible, setVisible] = useState(false);
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e: any) => {
    setVisible(false);
  };

  const handleCancel = (e: any) => {
    setVisible(false);
  };
  return (
    <>
      <Menu style={{ textAlign: "center" }}>
        <Menu.Item>
          <Button
            onClick={showModal}
            style={{ width: 70 }}
            size="small"
            type="primary"
          >
            View
          </Button>
          <Modal
            title="Basic Modal"
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </Menu.Item>
        <Menu.Item>
          <Button style={{ width: 70 }} size="small" type="primary" ghost>
            Approve
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Button style={{ width: 70 }} size="small" danger>
            Decline
          </Button>
        </Menu.Item>
      </Menu>
    </>
  );
};
export default DropdownMenuRequest;
