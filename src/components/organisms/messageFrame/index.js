import React, { useState } from "react";
import Textarea from "../../atoms/textarea";
import MessageView from "../../molecules/messageView";

import "./style.css";

/**
 *
 * @param {{
 * messageList:Array,
 * setMessageList:Function,
 * updateMessageList:Function,
 * status:number}} props
 * @returns
 */
const MessageFrame = (props) => {
  const { messageList, setMessageList, updateMessageList, status } = props;
  const [myMessage, setMyMessage] = useState("");
  const [myUnsendMessageIndex, setMyUnsendMessageIndex] = useState(0);
  const [isTyping, setTyping] = useState(false);

  const onChange = (value) => {
    setMyMessage(value);

    if (value.length !== 0 && isTyping !== true) {
      setTyping(true);
      setMyUnsendMessageIndex(messageList.length);
      setMessageList([...messageList, { isTyping: true, type: "me" }]);
    } else if (value.length === 0 && isTyping !== false) {
      setTyping(false);
      setMessageList([
        ...messageList.slice(0, myUnsendMessageIndex),
        ...messageList.slice(myUnsendMessageIndex + 1),
      ]);
    }
  };
  const sendMessage = (e) => {
    let tempMessage = {
      content: myMessage,
      date: Date.now(),
      type: "me",
      isTyping: false,
    };
    setMessageList([
      ...messageList.slice(0, myUnsendMessageIndex),
      tempMessage,
      ...messageList.slice(myUnsendMessageIndex + 1),
    ]);
    setMyMessage("");
    setMyUnsendMessageIndex(0);
    updateMessageList(myMessage);
    setTyping(false);
  };

  return (
    <div className="message-frame">
      <MessageView messageList={messageList} empty={status === 2} />
      <Textarea
        value={
          status === 2
            ? "input will be disable if you haven't selected a person to talk with"
            : myMessage
        }
        onChange={onChange}
        enter
        enterEvent={sendMessage}
        height="2.5rem"
        maxHeight="15vh"
        width="60%"
        maxWidth="60%"
        disabled={status !== 1}
      />
    </div>
  );
};

export default MessageFrame;
