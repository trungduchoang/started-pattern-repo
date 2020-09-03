// libs
import React from "react";
import { Table, Tag, Button, Dropdown } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import moment from "moment";
// components
import DropdownMenuRequest from "./DropdownMenuRequest";
// others
import "./style.scss";

const AssignRequestTable = () => {
  const columns = [
    {
      title: "ID",
      dataIndex: "ID",
      key: "ID",
      align: "center" as "center",
      width: 100,
      sorter: (a: any, b: any) => a.ID - b.ID
    },
    {
      title: "CODE",
      dataIndex: "CODE",
      key: "CODE",
      align: "center" as "center",
      filters: [
        { text: "ABC-XYZ-2020		", value: "ABC-XYZ-2020" },
        { text: "ABC-DSW-2010", value: "ABC-DSW-2010" }
      ],
      onFilter: (value: any, record: any) => record.CODE.indexOf(value) === 0
    },
    {
      title: "TITLE",
      dataIndex: "TITLE",
      key: "TITLE",
      align: "center" as "center",
      sorter: (a: any, b: any) => a.TITLE.length - b.TITLE.length
    },
    {
      title: "USER APPLICANT",
      dataIndex: "USERAPPLICANT",
      key: "USERAPPLICANT",
      align: "center" as "center"
    },
    {
      title: "SUBMIT DATE",
      dataIndex: "SUBMITDATE",
      key: "SUBMIT DATE",
      align: "center" as "center",
      width: 130,
      sorter: (a: any, b: any) =>
        moment(a.SUBMITDATE).unix() - moment(b.SUBMITDATEq).unix()
    },
    {
      title: "STATUS",
      dataIndex: "STATUS",
      key: "STATUS",
      align: "center" as "center",
      width: 100,

      render: (tag: any) => {
        switch (true) {
          case tag.pedding:
            return <Tag color="yellow">Pending</Tag>;
          case tag.approve:
            return <Tag color="green">Passed</Tag>;
          case tag.decline:
            return <Tag color="red">Decline</Tag>;
          default:
            return;
        }
      }
    },
    {
      title: "ACTIONS",
      key: "ACTIONS",
      dataIndex: "ACTIONS",
      width: 100,
      align: "center" as "center",

      render: () => (
        <Dropdown trigger={["click"]} overlay={<DropdownMenuRequest />}>
          <Button
            onClick={e => e.preventDefault()}
            style={{ width: "35px" }}
            size="small"
            type="default"
            icon={<EllipsisOutlined />}
          ></Button>
        </Dropdown>
      )
    }
  ];

  const data = [
    {
      key: "1",
      ID: "1",
      CODE: "ABC-XYZ-2020",
      TITLE: "New York No. 1 Lake Park21312312312",
      USERAPPLICANT: "baotien.ho",
      SUBMITDATE: moment("11-10-2019").format("L"),
      STATUS: { pedding: false, approve: true, decline: false },
      ACTIONS: "Detail"
    },
    {
      key: "2",
      ID: "2",
      CODE: "ABC-DSW-2010",
      TITLE: "New York No. 1 Lake Park",
      USERAPPLICANT: "baotien.ho",
      SUBMITDATE: moment("11-10-2019").format("L"),
      STATUS: { pedding: false, approve: true, decline: false },
      ACTIONS: "Detail"
    },
    {
      key: "3",
      ID: "3",
      CODE: "ABC-XYZ-2020",
      TITLE: "New York No. 1 Lake Park",
      USERAPPLICANT: "baotien.ho",
      SUBMITDATE: moment("09-10-2019").format("L"),
      STATUS: { pedding: true, approve: false, decline: false },
      ACTIONS: "Detail"
    },
    {
      key: "4",
      ID: "4",
      CODE: "ABC-DSW-2010",
      TITLE: "New York No. 1 Lake Park",
      USERAPPLICANT: "baotien.ho",
      SUBMITDATE: moment("10-22-2019").format("L"),
      STATUS: { pedding: false, approve: false, decline: true },
      ACTIONS: "Detail"
    },
    {
      key: "5",
      ID: "5",
      CODE: "ABC-XYZ-2020",
      TITLE: "New York No. 1 Lake Park",
      USERAPPLICANT: "baotien.ho",
      SUBMITDATE: moment("08-02-2019").format("L"),
      STATUS: { pedding: false, approve: true, decline: false },
      ACTIONS: "Detail"
    },
    {
      key: "6",
      ID: "6",
      CODE: "ABC-DSW-2010",
      TITLE: "New York No. 1 Lake Park",
      USERAPPLICANT: "baotien.ho",
      SUBMITDATE: moment("06-10-2019").format("L"),
      STATUS: { pedding: true, approve: false, decline: false },
      ACTIONS: "Detail"
    }
  ];
  return (
    <div className="assign-request-table-wrapper">
      <Table
        bordered
        size="middle"
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

export default AssignRequestTable;
