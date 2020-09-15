// libs
import React, { useState } from "react";
import { Form, Input, Button, DatePicker } from "antd";
import moment from "moment";
// others
import "./style.scss";

const onChange = (value: any, dateString: any) => {
  console.log("Selected Time: ", value);
  console.log("Formatted Selected Time: ", dateString);
};

const onOk = (value: any) => {
  console.log("onOk: ", value);
};

// TODO: Research react-hook-form
const ViewRequestForm = () => {
  const [state, setState] = useState(true);
  const layout = {
    labelCol: { span: 3, offset: 4 },
    wrapperCol: { span: 12 }
  };
  // const validateMessages = {
  //     required: '${label} is required!',
  //     types: {
  //       email: '${label} is not validate email!',
  //       number: '${label} is not a validate number!',
  //     },
  //     number: {
  //       range: '${label} must be between ${min} and ${max}',
  //     },
  // };

  const onFinish = (values: any) => {
    console.log("123123", values);
  };
  const initialValues = {
    title: "UPDATE THỜI GIAN CHẤM CÔNG",
    checkIn: moment("2015-01-01", "YYYY-MM-DD"),
    checkOut: moment("2015-01-01", "YYYY-MM-DD"),
    reason:
      "Ngày 28/8/2020 vì không chấm công được nên mong anh/chị update thời gian chấm công giúp em ạ. Em xin cảm ơn ạ !"
  };
  return (
    <div className="view-request-form-wrapper">
      <Form {...layout} name="nest-messages" onFinish={onFinish}>
        <Form.Item
          initialValue={initialValues.title}
          labelAlign="left"
          name={["user", "title"]}
          label="Title"
        >
          <Input disabled={state} />
        </Form.Item>
        <Form.Item
          initialValue={initialValues.checkIn}
          labelAlign="left"
          name={["user", "checkin"]}
          label="Check in Time"
        >
          <DatePicker
            disabled={state}
            showTime
            onChange={onChange}
            onOk={onOk}
          />
        </Form.Item>
        <Form.Item
          initialValue={initialValues.checkOut}
          labelAlign="left"
          name={["user", "checkout"]}
          label="Check out Time"
        >
          <DatePicker
            disabled={state}
            showTime
            onChange={onChange}
            onOk={onOk}
          />
        </Form.Item>
        <Form.Item
          initialValue={initialValues.reason}
          labelAlign="left"
          name={["user", "reason"]}
          label="Reason"
        >
          <Input.TextArea disabled={state} />
        </Form.Item>
        <Form.Item
          className="item-align-right"
          labelAlign="right"
          wrapperCol={{ span: 15, offset: 4 }}
        >
          <Button
            style={{ display: "inline", marginRight: 15 }}
            onClick={() => setState(false)}
            type="primary"
          >
            Edit
          </Button>
          <Button
            style={{ display: "inline" }}
            disabled={state}
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default ViewRequestForm;
