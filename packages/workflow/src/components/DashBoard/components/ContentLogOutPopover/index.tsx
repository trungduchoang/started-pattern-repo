// libs
import React from "react";
// others
import "./style.scss";

const ContentLogOutPopover = () => {
  return (
    <div className="content-log-out-popover-wrapper">
      <div className="avatar-logout">
        <img
          loading="lazy"
          src="https://img3.thuthuatphanmem.vn/uploads/2019/10/10/anh-avatar-doremon_033145784.png"
          alt="img-avatar"
        />
      </div>
      <div className="username-logout">
        <h4>baotien.ho</h4>
        <p>Manager</p>
      </div>
      <button className="click-log-out">Log Out</button>
    </div>
  );
};
export default ContentLogOutPopover;
