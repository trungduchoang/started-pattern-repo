// libs import
import { DatePicker, Input, Select, Form, Button } from "antd";
import React, { useState } from "react";
// others
import "./style.scss";
import CONSTANTS from "src/constants";

const { Option } = Select;
const { TextArea } = Input;
const FormView: React.FC = () => {
  const [typeRequest, setTypeRequest] = useState("1");

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    setTypeRequest(value);
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const teamBuilding = ["datePicker", "datePicker", "input", "textArea"];
  const workingHours = ["datePicker", "textArea", "input", "textArea"];
  const totalRequest = [teamBuilding, workingHours];

  const renderForm = (custom: string[]) => {
    let result = null;
    if (custom.length > 0) {
      result = custom.map((item, index) => {
        switch (item) {
          case "datePicker":
            return (
              <Form.Item name={index} label="DatePicker">
                <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
              </Form.Item>
            );
          case "input":
            return (
              <Form.Item label={index} name={index}>
                <Input />
              </Form.Item>
            );
          case "textArea":
            return (
              <Form.Item label={index} name={index}>
                <TextArea rows={4} />
              </Form.Item>
            );

          default:
            return null;
        }
      });
    }
    return result;
  };

  return (
    <>
      <Select defaultValue="1" style={{ width: 250 }} onChange={handleChange}>
        <Option value="1">REQUEST FOR TEAM BUILDING</Option>
        <Option value="2">UPDATE WORKING HOURS</Option>
        <Option value="3">REQUEST FOR SUPPLY</Option>
        <Option value="4">PROCESS OF APPLYING FOR LEAVE</Option>
        <Option value="5">PAYMENT</Option>
      </Select>
      <Form
        layout="vertical"
        name="createRequest"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        {renderForm(
          totalRequest[parseInt(typeRequest, CONSTANTS.RADIX.DECIMA) - 1]
        )}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormView;
