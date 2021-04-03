import React, { useState } from "react";
import RecentMessageTemplate from "../../components/templates/recentMessageTemplate";
import RecentMessageList from "../../components/organisms/recentMessageList";
import MessageFrame from "../../components/organisms/messageFrame";

const RecentMessagePage = (props) => {
  //const { id } = props;
  const [messageList, setMessageList] = useState([
    { content: "yo wanna come over", date: Date.now(), type: "other" },
  ]);
  const updateMessageList = () => {};
  const recentList = [
    {
      person: { id: "12345", name: "Randall Lockle" },
      lastMessage: {
        content: "hey poe2 is coming you buying or what",
        unread: true,
        date: Date.now() - 5000,
      },
    },
    {
      person: { id: "12378", name: "Rea Ali" },
      lastMessage: {
        content: "wanna come over",
        unread: true,
        date: Date.now() - 7000,
      },
    },
  ];
  return (
    <RecentMessageTemplate
      recentMessageSideBar={RecentMessageList({ recentList })}
      messageFrame={MessageFrame({
        messageList,
        setMessageList,
        updateMessageList,
      })}
    />
  );
};

export default RecentMessagePage;
