// libs import
import { Modal } from "antd";
import React from "react";
// components
import Form from "../FormView";
// others
import "./style.scss";

interface Props {
  visible: boolean;
  handleClose: Function;
}

const CreateRequest: React.FC<Props> = props => {
  const { visible, handleClose } = props;

  const Close = () => {
    handleClose();
  };

  return (
    <>
      <Modal
        visible={visible}
        onCancel={Close}
        centered
        footer={null}
        title="Create Request"
      >
        <Form />
      </Modal>
    </>
  );
};

export default CreateRequest;
