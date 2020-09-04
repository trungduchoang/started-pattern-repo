// libs import
import React from "react";
import { Modal, Input, Button, Form, Steps } from "antd";
// others
import "./style.scss";

const { Step } = Steps;

interface Props {
  visible: boolean;
  handleClose: Function;
}

const Detail: React.FC<Props> = props => {
  const { visible, handleClose } = props;
  const [form] = Form.useForm();

  const Close = () => {
    handleClose();
  };

  const onFinish = (values: any) => {
    console.log(values);
  };
  const onRemove = () => {
    console.log(form.getFieldValue(["id"]));
  };

  return (
    <>
      <Modal
        title={
          <Steps className="padding-step" current={1} size="small">
            <Step title="Finished" />
            <Step title="In Progress" />
            <Step title="Waiting" />
          </Steps>
        }
        visible={visible}
        onCancel={Close}
        footer={null}
      >
        <Form
          layout="vertical"
          form={form}
          name="control-hooks"
          onFinish={onFinish}
        >
          <Form.Item name="id" label="id">
            <Input />
          </Form.Item>
          <Form.Item name="name" label="name">
            <Input />
          </Form.Item>
          <Form.Item name="email" label="email">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Edit
            </Button>
            <Button htmlType="button" onClick={onRemove}>
              Remove
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Detail;
