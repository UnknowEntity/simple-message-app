import React from "react";
import MessageBox from "../../atoms/messageBox";
import "./style.css";

/**
 *
 * @param {{messageList:[{content:string,date:number,type:string}]}} props
 * @returns
 */
const MessageView = (props) => {
  const { messageList } = props;
  let messageBoxList = messageList.map((n, index) => {
    return MessageBox({
      content: n.content,
      isTyping: n.isTyping,
      date: n.date,
      type: n.type,
      key: index,
    });
  });

  return <div className="message-view">{messageBoxList}</div>;
};

export default MessageView;
