import React from "react";
import moment from "moment";
import { Button, Input, DatePicker, Form } from "antd";
// hooks
import { useRouter } from "@/hooks";
// components
import ViewAssignRequestModal from "../ViewAssignRequestModal";
// others
import CONSTANTS from "@/constants";
import "./style.scss";

const onChange = (value: any, dateString: any) => {
  console.log("Selected Time: ", value);
  console.log("Formatted Selected Time: ", dateString);
};

const onOk = (value: any) => {
  console.log("onOk: ", value);
};

// TODO: Research react-hook-form
const ViewAssignRequestForm = () => {
  const router = useRouter();

  const success = () => {
    router.push(CONSTANTS.ROUTERS.ASSIGN_REQUEST);
  };

  const layout = {
    labelCol: { span: 4, offset: 4 },
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
    console.log(values);
  };

  const initialValues = {
    title: "UPDATE THỜI GIAN CHẤM CÔNG",
    checkIn: moment("2015-01-01", "YYYY-MM-DD"),
    checkOut: moment("2015-01-01", "YYYY-MM-DD"),
    reason:
      "Ngày 28/8/2020 vì không chấm công được nên mong anh/chị update thời gian chấm công giúp em ạ. Em xin cảm ơn ạ !"
  };

  return (
    <div className="view-assign-request-form-wrapper">
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        className="request-form"
      >
        <Form.Item
          initialValue={initialValues.title}
          labelAlign="left"
          name={["user", "title"]}
          label="Title"
        >
          <Input disabled />
        </Form.Item>
        <Form.Item
          initialValue={initialValues.checkIn}
          labelAlign="left"
          name={["user", "checkin"]}
          label="Check in Time"
        >
          <DatePicker disabled showTime onChange={onChange} onOk={onOk} />
        </Form.Item>
        <Form.Item
          initialValue={initialValues.checkOut}
          labelAlign="left"
          name={["user", "checkout"]}
          label="Check out Time"
        >
          <DatePicker disabled showTime onChange={onChange} onOk={onOk} />
        </Form.Item>
        <Form.Item
          initialValue={initialValues.reason}
          labelAlign="left"
          name={["user", "reason"]}
          label="Reason"
        >
          <Input.TextArea disabled />
        </Form.Item>
        <Form.Item
          className="item-align-right"
          labelAlign="right"
          wrapperCol={{ span: 16, offset: 4 }}
        >
          <Button
            onClick={success}
            style={{ display: "inline" }}
            type="primary"
          >
            Approve
          </Button>
          <ViewAssignRequestModal />
        </Form.Item>
      </Form>
    </div>
  );
};
export default ViewAssignRequestForm;
