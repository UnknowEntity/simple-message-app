import React from "react";
import PropTypes from "prop-types";
import MessageBox from "../../atoms/messageBox";
import "./style.css";
import LoadingBubbles from "../../animations/loadingBubbles";

/**
 *
 * @param {{messageList:[{content:string,date:number,type:string}],empty:boolean}} props
 * @returns
 */
const MessageView = (props) => {
  const { messageList, empty } = props;
  let messageBoxContent = (
    <div className="message-view-default">
      <LoadingBubbles height={100} />
    </div>
  );
  if (messageList.length !== 0) {
    messageBoxContent = messageList.map((n, index) => {
      return (
        <MessageBox
          content={n.content}
          isTyping={n.isTyping}
          date={n.date}
          type={n.type}
          key={Math.random()}
        />
      );
    });
  } else if (empty) {
    messageBoxContent = (
      <div className="message-view-empty">
        you haven't had any recent coversation please use find the person you
        want to talk with
      </div>
    );
  }

  return (
    <div className={`message-view ${messageList.length !== 0 ? "active" : ""}`}>
      {messageBoxContent}
    </div>
  );
};

MessageView.defautProps = {
  empty: false,
};

MessageView.propTypes = {
  empty: PropTypes.bool,
  messageList: PropTypes.array,
};

export default MessageView;
