// libs
import React from "react";
import { Tag } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";
// components
import ButtonViewRequest from "@/pages/AssignRequest/components/ButtonViewRequest";
// others
import CONSTANTS from "@/constants";

const requestTableColumns = [
  {
    title: "ID",
    dataIndex: "ID",
    key: "ID",
    align: "center" as "center",
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
    render: (text: any, record: any) => (
      <Link
        to={{
          pathname: CONSTANTS.ROUTERS.VIEW_ASSIGN_REQUEST,
          state: { requestId: record.ID } // TODO: variables's name uses camelCase (ID)
        }}
      >
        {text}
      </Link>
    ),
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
    sorter: (a: any, b: any) =>
      moment(a.SUBMITDATE).unix() - moment(b.SUBMITDATEq).unix()
  },
  {
    title: "STATUS",
    dataIndex: "STATUS",
    key: "STATUS",
    align: "center" as "center",
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
    width: 90,
    align: "center" as "center",
    render: (_: any, record: any) => (
      <ButtonViewRequest record={record} />
      // <Dropdown
      //   trigger={["click"]}
      //   overlay={<DropdownMenuRequest record={record} />}
      // >
      //   <Button
      //     // TODO: Replace this button by normal <div>...</div>
      //     onClick={e => e.preventDefault()} // Because this is unecessary "preventDefault"
      //     style={{ width: "35px" }}
      //     size="small"
      //     type="default"
      //     icon={<EllipsisOutlined />}
      //   />
      // </Dropdown>
    )
  }
];

export default requestTableColumns;
