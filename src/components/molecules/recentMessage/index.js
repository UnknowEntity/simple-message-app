import React from "react";
import Avatar from "react-avatar";
import Moment from "moment";
import LinkModified from "../../atoms/links";
import "./style.css";

/**
 *
 * @param {{
 * person:
 * {id: String,
 * name: String},
 * lastMessage:
 * {content:String,
 * unread:boolean
 * sender:string
 * date:number},
 * choose: boolean}} props
 * @returns
 */
const RecentMessage = (props) => {
  const { person, lastMessage, choose } = props;
  return (
    <LinkModified
      url={`/p/${person.id}`}
      className={`recent-message ${choose ? "choose" : ""}`}
    >
      <Avatar
        name={person.name}
        size="55"
        color={Avatar.getRandomColor("sitebase", ["red", "green", "blue"])}
        round={true}
        className="avatar"
      />
      <div>
        <div className="name">{person.name}</div>
        <div className={`last-message`}>
          <div
            className={`last-message-content ${
              lastMessage.unread ? "unread" : ""
            }`}
          >
            {lastMessage.content}
          </div>
          <div className="last-message-date">
            {Moment(lastMessage.date).fromNow(true)}
          </div>
        </div>
      </div>
    </LinkModified>
  );
};

RecentMessage.defaultProps = {
  choose: false,
};

export default RecentMessage;
