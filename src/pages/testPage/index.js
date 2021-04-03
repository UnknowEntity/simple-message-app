import React, { useState } from "react";
import MessageFrame from "../../components/organisms/messageFrame";

const TestPage = (prop) => {
  const [messageList, setMessageList] = useState([
    { content: "yo wanna come over", date: Date.now(), type: "other" },
  ]);
  const updateMessageList = () => {};

  return (
    <div>
      <MessageFrame
        messageList={messageList}
        setMessageList={setMessageList}
        updateMessageList={updateMessageList}
      />
    </div>
  );
};

export default TestPage;
