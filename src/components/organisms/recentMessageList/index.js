import React from "react";
import RecentMessage from "../../molecules/recentMessage";
import "./style.css";

/**
 *
 * @param {{recentList:Array}} props
 * @returns
 */
const RecentMessageList = (props) => {
  const { recentList } = props;
  const list = recentList.map((n, index) => {
    const { person, lastMessage } = n;
    return (
      <RecentMessage
        key={index}
        person={person}
        lastMessage={lastMessage}
        choose={index === 0 ? true : false}
      />
    );
  });
  return <div className="recent-message-list">{list}</div>;
};

export default RecentMessageList;
