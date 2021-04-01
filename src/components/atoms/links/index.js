import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./style.css";

const LinkModified = (props) => {
  const { children, url, className } = props;
  return (
    <Link to={url} className={className}>
      {children}
    </Link>
  );
};

LinkModified.propTypes = {
  url: PropTypes.string,
  className: PropTypes.string,
};

LinkModified.defaultProps = {
  url: "#",
  className: "",
};

export default LinkModified;
