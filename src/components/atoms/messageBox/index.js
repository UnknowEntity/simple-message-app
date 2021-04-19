import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";
import TypingAnimation from "../../animations/typing";
import "./style.css";

export const MessageTypes = {
  ME: "me",
  OTHER: "other",
};

/**
 *
 * @param {{content:string,isTyping:boolean, date: any, type: string}} props
 * @returns
 */
const MessageBox = (props) => {
  const { content, isTyping, date, type } = props;
  let message = isTyping ? <TypingAnimation height={10} /> : content;
  return (
    <div className={`message-box ${type}`}>
      <div className={`message-content ${type}`}>{message}</div>
      <div className={`message-date ${type}`}>
        {isTyping ? "" : Moment(date).format("h:mm:ss A, dddd D/M/YYYY")}
      </div>
    </div>
  );
};

MessageBox.propTypes = {
  content: PropTypes.string,
  isTyping: PropTypes.bool,
  date: PropTypes.any,
  type: PropTypes.string,
};

MessageBox.defaultProps = {
  isTyping: true,
  date: Date.now(),
  type: MessageTypes.ME,
};

export default MessageBox;
