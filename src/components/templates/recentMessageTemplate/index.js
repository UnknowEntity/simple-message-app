import React from "react";
import "./style.css";

/**
 *
 * @param {{messageFrame:React.Component,recentMessageSideBar:React.Component}} props
 * @returns
 */
const RecentMessageTemplate = (props) => {
  const { messageFrame, recentMessageSideBar } = props;
  return (
    <div className="recent-message-template">
      <div className="sidebar">{recentMessageSideBar}</div>
      <div className="frame">{messageFrame}</div>
    </div>
  );
};

export default RecentMessageTemplate;
