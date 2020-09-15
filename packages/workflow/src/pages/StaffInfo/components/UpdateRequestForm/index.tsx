// libs import
import React from "react";
import { Input, Button, Form } from "antd";
// others
import "./style.scss";

const UpdateRequestForm: React.FC = () => {
  const [form] = Form.useForm();
  const editRequest = (values: any) => {
    console.log(values);
  };
  const deleteRequest = () => {
    console.log(form.getFieldValue(["id"]));
  };

  // TODO: Research react-hook-form
  return (
    <div className="update-request-form">
      <Form
        layout="vertical"
        form={form}
        name="control-hooks"
        onFinish={editRequest}
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
          <Button htmlType="button" onClick={deleteRequest}>
            Delete
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateRequestForm;
