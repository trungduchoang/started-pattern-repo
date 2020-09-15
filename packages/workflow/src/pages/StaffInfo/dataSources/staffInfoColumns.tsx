// libs
import React from "react";
import moment from "moment";
import { Button, Tag } from "antd";
import { Link } from "react-router-dom";
// others
import CONSTANTS from "@/constants";

const staffInfoColumns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    align: "center" as "center",
    width: 100,
    sorter: (a: any, b: any) => a.id - b.id
  },
  {
    title: "CODE",
    dataIndex: "code",
    key: "code",
    align: "center" as "center",
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
    align: "center" as "center",
    render: (text: any, record: any) => (
      <Link
        to={{
          pathname: CONSTANTS.ROUTERS.VIEW_REQUEST,
          state: { requestId: record.id }
        }}
      >
        {text}
      </Link>
    ),
    sorter: (a: any, b: any) => a.title.length - b.title.length
  },
  {
    align: "center" as "center",
    title: "SUBMIT DATE",
    dataIndex: "startTime",
    key: "startTime",
    width: 130,
    sorter: (a: any, b: any) =>
      moment(a.submitDate).unix() - moment(b.submitDate).unix()
  },
  {
    title: "STATUS",
    dataIndex: "state",
    key: "state",
    width: 100,
    render: (tag: string) => {
      switch (tag) {
        case "ACTIVE":
          return <Tag color="gold">Pending</Tag>;
        case "COMPLETE":
          return <Tag color="red">{tag}</Tag>;
      }
    },
    align: "center" as "center"
  },
  {
    title: "ACTIONS",
    dataIndex: "action",
    key: "action",
    width: 100,
    render: (_: any, record: any) => (
      <Link
        to={{
          pathname: CONSTANTS.ROUTERS.VIEW_REQUEST,
          state: { requestId: record.id }
        }}
      >
        <Button size="small" style={{ borderRadius: 3 }} type="primary">
          View
        </Button>
      </Link>
    ),
    align: "center" as "center"
  }
];

export default staffInfoColumns;
