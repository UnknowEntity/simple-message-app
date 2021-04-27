import React from "react";
import Avatar from "react-avatar";

const TestPage = (prop) => {
  return (
    <a className="recent-message" href="/">
      <Avatar
        name={"john jones"}
        size="50"
        color={Avatar.getRandomColor("sitebase", ["red", "green", "blue"])}
        round={true}
        className="avatar online"
      />
    </a>
  );
};

export default TestPage;
