import React from "react";
import PropTypes from "prop-types";
import "./style.css";

/**
 *
 * @param {{
 * message: string,
 * level: string,
 * isShow: boolean}} props
 * @returns
 */
const Warning = (props) => {
  const { message, level, isShow } = props;
  return <div className={`warning ${level} ${isShow}`}>{message}</div>;
};

Warning.defaultProps = {
  level: "medium",
};

Warning.propTypes = {
  message: PropTypes.string,
  level: PropTypes.string,
  isShow: PropTypes.bool,
};

export default Warning;
