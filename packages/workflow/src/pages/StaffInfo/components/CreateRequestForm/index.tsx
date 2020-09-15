// libs import
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { DatePicker, Input, Select, Form, Button } from "antd";
import moment from "moment";
// components
import withLoading from "@/hocs/withLoading";
import withErrorBoundary from "@/hocs/withErrorBoundary";
// actions
import {
  fetchRequestTypes,
  createRequest
} from "@/actions/MyRequest/CreateRequestForm";
// others
import "./style.scss";

const { Option } = Select;
const { TextArea } = Input;

// TODO: Research react-hook-form
const CreateRequestForm: React.FC = () => {
  const [requestType, setRequestType] = useState(0);
  const [form] = Form.useForm();

  const dispatch = useDispatch();
  const { listRequestTypes, isLoading, isError, error } = useSelector(
    (state: RootStateOrAny) => state.MyRequest.CreateRequestFormReducer
  );
  useEffect(() => {
    dispatch(fetchRequestTypes());
    return () => {};
  }, [dispatch]);

  const handleChange = (value: number) => {
    setRequestType(value);
    form.resetFields();
  };

  const onFinish = (values: any) => {
    const date = `${moment(values.date._d).format("L")} ${moment(
      values.date._d
    ).format("LTS")}`;
    createRequest({
      data: { ...values, date: date },
      params: { requestTypeId: listRequestTypes[requestType].id }
    })(dispatch);
    form.resetFields();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const renderForm = (custom: any) => {
    let result = null;
    if (custom) {
      const temp = custom.startForm;
      result = temp.map((item: any, index: number) => {
        switch (item.type) {
          case "date":
            return (
              <Form.Item key={index} label={item.label} name={item.fieldName}>
                <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
              </Form.Item>
            );
          case "input":
            return (
              <Form.Item key={index} label={item.label} name={item.fieldName}>
                <Input />
              </Form.Item>
            );
          case "textArea":
            return (
              <Form.Item key={index} label={item.label} name={item.fieldName}>
                <TextArea key={index} rows={4} />
              </Form.Item>
            );
          default:
            return null;
        }
      });
    }
    return result;
  };

  return withLoading(isLoading)(
    withErrorBoundary({ isError, error })(
      <>
        <Select defaultValue={0} style={{ width: 250 }} onChange={handleChange}>
          {listRequestTypes.map((item: any, index: number) => (
            <Option key={index} value={index}>
              {item.name}
            </Option>
          ))}
        </Select>
        <Form
          layout="vertical"
          name="createRequest"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          form={form}
        >
          {renderForm(listRequestTypes[requestType])}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </>
    )
  );
};

export default CreateRequestForm;
