import React from "react";
import Avatar from "react-avatar";
import Moment from "moment";
import LinkModified from "../../atoms/links";
import "./style.css";

/**
 *
 * @param {{
 * id: String,
 * name: String,
 * content:String,
 * unread:boolean,
 * sender:boolean,
 * date:number,
 * choose: boolean,
 * searchKeyWord:string}} props
 * @returns
 */
const RecentMessage = (props) => {
  const {
    name,
    id,
    content,
    sender,
    date,
    choose,
    unread,
    searchKeyWord,
  } = props;
  let isHide =
    name.toLowerCase().search(searchKeyWord.toLowerCase()) === -1 ? "hide" : "";
  return (
    <LinkModified
      url={`/message/${id}`}
      className={`recent-message ${choose ? "choose" : ""} ${isHide}`}
    >
      <Avatar
        name={name}
        size="50"
        color={Avatar.getRandomColor("sitebase", ["red", "green", "blue"])}
        round={true}
        className="avatar"
      />
      <div>
        <div className="name">{name}</div>
        <div className={`last-message`}>
          <div
            className={`last-message-content ${
              unread && !sender ? "unread" : ""
            }`}
          >
            {`${sender ? "Me: " : ""}${content}`}
          </div>
          <div className="last-message-date">{Moment(date).fromNow(true)}</div>
        </div>
      </div>
    </LinkModified>
  );
};

RecentMessage.defaultProps = {
  choose: false,
};

export default RecentMessage;
