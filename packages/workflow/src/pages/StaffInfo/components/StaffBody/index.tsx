// libs
import React, { useEffect } from "react";
import { Table } from "antd";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
// components
import RequestFilter from "@/components/RequestFilter";
import withLoading from "@/hocs/withLoading";
import withErrorBoundary from "@/hocs/withErrorBoundary";
// dataSources, mocks
import staffInfoColumns from "@/pages/StaffInfo/dataSources/staffInfoColumns";
// actions
import { fetchMyRequestData } from "@/actions/MyRequest/StaffBody";
// other
import "./style.scss";

const StaffBody: React.FC = () => {
  const dispatch = useDispatch();
  const { listMyRequest, isLoading, isError, error } = useSelector(
    // TODO: Replace ALL wrong type RootStateOrAny by exactly type
    (state: RootStateOrAny) => state.MyRequest.FetchMyRequestData
  );

  useEffect(() => {
    dispatch(fetchMyRequestData());
  }, [dispatch]);

  return withLoading(isLoading)(
    withErrorBoundary({ isError, error })(
      <div className="StaffBody">
        <RequestFilter />
        <Table
          size="middle"
          bordered
          columns={staffInfoColumns}
          dataSource={listMyRequest}
          pagination={{
            defaultPageSize: 10,
            showSizeChanger: true,
            pageSizeOptions: ["10", "20", "30", "50", "100"]
          }}
        />
      </div>
    )
  );
};

export default StaffBody;
