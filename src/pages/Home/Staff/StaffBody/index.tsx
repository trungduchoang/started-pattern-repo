// libs import
import React from "react";
import { Table, Button, Tag } from "antd";
import { Link } from "react-router-dom";
import moment from "moment";
// components
// import Detail from "../Detail";
// other
import "./style.scss";

const StaffBody: React.FC = () => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      align: "center",
      width: 100,
      sorter: (a: any, b: any) => a.id - b.id
    },
    {
      title: "CODE",
      dataIndex: "code",
      key: "code",
      align: "center",
      filters: [
        { text: "HD-0032	", value: "HD-0032" },
        { text: "Jim", value: "Jim" }
      ],
      onFilter: (value: any, record: any) => record.code.indexOf(value) === 0
    },
    {
      title: "TITLE",
      dataIndex: "title",
      key: "title",
      align: "center",
      sorter: (a: any, b: any) => a.title.length - b.title.length
    },
    {
      title: "USER APPLICANT",
      dataIndex: "userApplicant",
      key: "userApplicant",
      align: "center"
    },
    {
      align: "center",
      title: "SUBMIT DATE",
      dataIndex: "submitDate",
      key: "submitDate",
      width: 130,
      sorter: (a: any, b: any) =>
        moment(a.submitDate).unix() - moment(b.submitDate).unix()
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "status",
      width: 100,
      render: (tag: string) => {
        switch (tag) {
          case "Pending":
            return <Tag color="yellow">{tag}</Tag>;
          case "Decline":
            return <Tag color="red">{tag}</Tag>;
          case "Passed":
            return <Tag color="green">{tag}</Tag>;
          default:
            return null;
        }
      },
      align: "center"
    },
    {
      title: "ACTIONS",
      dataIndex: "action",
      key: "action",
      width: 100,
      render: (action: string) => (
        <Link to={`/viewrequest/${action}`}>
          <Button size="small" style={{ borderRadius: 3 }} type="primary">
            View
          </Button>
        </Link>
      ),
      align: "center"
    }
  ];

  const data = [
    {
      key: "1",
      id: "1",
      code: "HD-0032",
      title: "Marianaasss",
      userApplicant: 32,
      submitDate: moment("11-10-2019").format("L"),
      status: "Pending",
      action: "1"
    },
    {
      key: "2",
      id: "2",
      code: "HD-0032",
      title: "Marianaasss",
      userApplicant: 32,
      submitDate: moment("10-10-2019").format("L"),
      status: "Decline",
      action: "2"
    },
    {
      key: "3",
      id: "3",
      code: "HD-0032",
      title: "Marianaasss",
      userApplicant: 32,
      submitDate: moment("10-20-2019").format("L"),
      status: "Passed",
      action: "3"
    },
    {
      key: "4",
      id: "4",
      code: "ABC-XYZ-2020",
      title: "New York No. 1 Lake Park",
      userApplicant: "baotien.ho",
      submitDate: moment("10-25-2019").format("L"),
      status: "Pending",
      action: "4"
    },
    {
      key: "5",
      id: "5",
      code: "ABC-XYZ-2020",
      title: "New York No. 1 Lake Park",
      userApplicant: "baotien.ho",
      submitDate: moment("10-25-2019").format("L"),
      status: "Pending",
      action: "4"
    },
    {
      key: "6",
      id: "6",
      code: "ABC-XYZ-2020",
      title: "New York No. 1 Lake Park",
      userApplicant: "baotien.ho",
      submitDate: moment("10-25-2019").format("L"),
      status: "Pending",
      action: "4"
    },
    {
      key: "7",
      id: "7",
      code: "ABC-XYZ-2020",
      title: "New York No. 1 Lake Park",
      userApplicant: "baotien.ho",
      submitDate: moment("10-25-2019").format("L"),
      status: "Pending",
      action: "4"
    },
    {
      key: "8",
      id: "8",
      code: "ABC-XYZ-2020",
      title: "New York No. 1 Lake Park",
      userApplicant: "baotien.ho",
      submitDate: moment("10-25-2019").format("L"),
      status: "Pending",
      action: "4"
    },
    {
      key: "9",
      id: "9",
      code: "ABC-XYZ-2020",
      title: "New York No. 1 Lake Park",
      userApplicant: "baotien.ho",
      submitDate: moment("10-25-2019").format("L"),
      status: "Pending",
      action: "4"
    },
    {
      key: "10",
      id: "10",
      code: "ABC-XYZ-2020",
      title: "New York No. 1 Lake Park",
      userApplicant: "baotien.ho",
      submitDate: moment("10-25-2019").format("L"),
      status: "Pending",
      action: "4"
    },
    {
      key: "11",
      id: "11",
      code: "ABC-XYZ-2020",
      title: "New York No. 1 Lake Park",
      userApplicant: "baotien.ho",
      submitDate: moment("10-25-2019").format("L"),
      status: "Pending",
      action: "4"
    },
    {
      key: "12",
      id: "12",
      code: "ABC-XYZ-2020",
      title: "New York No. 1 Lake Park",
      userApplicant: "baotien.ho",
      submitDate: moment("10-25-2019").format("L"),
      status: "Pending",
      action: "4"
    }
  ];
  return (
    <div className="StaffBody">
      <Table
        size="middle"
        bordered
        columns={columns}
        dataSource={data}
        scroll={{ x: 800, y: 500 }}
        pagination={{
          position: ["topLeft"],
          defaultPageSize: 10,
          showSizeChanger: true,
          pageSizeOptions: ["10", "20", "30", "50", "100"]
        }}
      />
    </div>
  );
};

export default StaffBody;
