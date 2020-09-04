// libs import
import { Button } from "antd";
import React, { useState } from "react";
// import Control from "@/c"
// components
import CreateRequest from "../CreateRequest";
// others
import "./style.scss";

const StaffHeader: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const handleClose = () => {
    setVisible(false);
  };

  const showModal = () => {
    setVisible(true);
  };

  return (
    <div className="StaffHeader">
      <div className="StaffHeader__top">
        <h1 className="StaffHeader__top-title">My Requests</h1>
        <Button onClick={showModal} type="primary">
          Create Request
        </Button>
      </div>
      <CreateRequest visible={visible} handleClose={handleClose} />
      <div className="StaffHeader__bottom">
        {/* <Control /> */}
      </div>
    </div>
  );
};

export default StaffHeader;
