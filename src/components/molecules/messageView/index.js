import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
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
  const [defaultState, setDefaultState] = useState(true);

  useEffect(() => {
    if (messageList.length !== 0 && defaultState) {
      let scroll = document.getElementsByClassName("message-view")[0];
      scroll.scrollTo(0, scroll.scrollHeight - scroll.clientHeight);
    }
  }, [messageList, defaultState]);

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

  const scrollEvent = () => {
    let scroll = document.getElementsByClassName("message-view")[0];
    let scroPos = scroll.scrollTop;
    if (scroPos !== scroll.scrollHeight - scroll.clientHeight && defaultState) {
      setDefaultState(false);
    } else if (scroPos === scroll.scrollHeight - scroll.clientHeight) {
      setDefaultState(true);
    }
  };

  const toBottom = () => {
    let scroll = document.getElementsByClassName("message-view")[0];
    scroll.scrollTo(0, scroll.scrollHeight - scroll.clientHeight);
  };

  return (
    <div
      className={`message-view ${messageList.length !== 0 ? "active" : ""}`}
      onScroll={() => scrollEvent()}
    >
      {messageBoxContent}
      <button
        className={`btn-to-bottom ${!defaultState ? "show" : ""}`}
        onClick={() => toBottom()}
      >
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
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
