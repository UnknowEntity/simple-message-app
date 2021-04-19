import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import RecentMessage from "../../molecules/recentMessage";
import InputText, { FontSize } from "../../atoms/inputText";
import "./style.css";
import Button from "../../atoms/buttons";

/**
 *
 * @param {{recentList:Array, choice:number}} props
 * @returns
 */
const RecentMessageList = (props) => {
  const { recentList, choice } = props;
  const [searchText, setSearchText] = useState("");
  const [show, setShow] = useState(false);
  const list = recentList.map((n, index) => {
    const { name, id, content, senderId, date, unread } = n;
    return (
      <RecentMessage
        key={index}
        name={name}
        id={id}
        content={content}
        sender={senderId !== id}
        date={date}
        unread={unread}
        searchKeyWord={searchText}
        choose={id === choice ? true : false}
      />
    );
  });
  return (
    <div className="recent-message-list">
      <Button straight onClick={() => setShow(!show)}>
        <FontAwesomeIcon icon={faBars} />
      </Button>
      <div className={`recent-message-part ${show ? "show" : ""}`}>
        <div className="recent-message-search-bar">
          <FontAwesomeIcon icon={faSearch} />
          <InputText
            value={searchText}
            onChange={setSearchText}
            placeholder="someone name"
            size={FontSize.LARGE}
          />
        </div>

        <div className="recent-message-scroll">{list}</div>
      </div>
    </div>
  );
};

export default RecentMessageList;
