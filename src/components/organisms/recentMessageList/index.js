import React from "react";
import RecentMessage from "../../molecules/recentMessage";
import "./style.css";

const RecentMessageList = (props) => {
  const { recentList } = props;
  const list = recentList.map((n) => {
    const { person, lastMessage } = n;
    return <RecentMessage person={person} lastMessage={lastMessage} />;
  });
  return <div className="recent-message-list">{list}</div>;
};

export default RecentMessageList;
