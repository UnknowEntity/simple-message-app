import React from "react";
import Image from "../../atoms/images";
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
 * unread:boolean}}} props
 * @returns
 */
const RecentMessage = (props) => {
  const { person, lastMessage } = props;
  return (
    <LinkModified url={`/p/${person.id}`} className="recent-message">
      <Image src={`/picture/${person.id}`} circle height={70} width={70} />
      <div>
        <div className="name">{person.name}</div>
        <div className={`last-message ${lastMessage.unread ? "unread" : ""}`}>
          {lastMessage.content}
        </div>
      </div>
    </LinkModified>
  );
};

export default RecentMessage;
