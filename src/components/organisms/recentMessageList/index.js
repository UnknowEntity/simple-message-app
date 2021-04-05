import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import RecentMessage from "../../molecules/recentMessage";
import InputText, { FontSize } from "../../atoms/inputText";
import "./style.css";

/**
 *
 * @param {{recentList:Array}} props
 * @returns
 */
const RecentMessageList = (props) => {
  const { recentList } = props;
  const [searchText, setSearchText] = useState("");
  const list = recentList.map((n, index) => {
    const { person, lastMessage } = n;
    return (
      <RecentMessage
        key={index}
        person={person}
        lastMessage={lastMessage}
        searchKeyWord={searchText}
        choose={index === 0 ? true : false}
      />
    );
  });
  return (
    <div className="recent-message-list">
      <div className="recent-message-search-bar">
        <FontAwesomeIcon icon={faSearch} />
        <InputText
          value={searchText}
          onChange={setSearchText}
          placeholder="someone name"
          size={FontSize.LARGE}
        />
      </div>

      {list}
    </div>
  );
};

export default RecentMessageList;
