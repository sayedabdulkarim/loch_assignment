import React from "react";
import { HomeBellIcon } from "../../../utils/svgs";

const NotificationComponent = () => {
  return (
    <div className="notification_component">
      <div className="left_section">
        <HomeBellIcon />
        <h3 className="first_label">
          Get notified when a highly correlated whale makes a move
        </h3>
        <h4 className="second_label">
          Find out when a certain whale moves more than any preset amount
          on-chain or when a dormant whale you care about becomes active.
        </h4>
      </div>
      <div className="right_section"></div>
    </div>
  );
};

export default NotificationComponent;
