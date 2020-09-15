// libs
import React from "react";
import { Table } from "antd";
// dataSources, mocks
import dataTableAssignRequest from "@/mocks/AssignRequest/requestTableDataSource";
import requestTableColumns from "@/pages/AssignRequest/dataSources/requestTableColumns";
// others
import "./style.scss";

const RequestTable = () => (
  <div className="request-table-wrapper">
    <Table
      bordered
      size="middle"
      columns={requestTableColumns}
      dataSource={dataTableAssignRequest}
      pagination={{
        // position: ["topLeft"],
        defaultPageSize: 10,
        showSizeChanger: true,
        pageSizeOptions: ["10", "20", "30", "50", "100"]
      }}
    />
  </div>
);

export default RequestTable;
