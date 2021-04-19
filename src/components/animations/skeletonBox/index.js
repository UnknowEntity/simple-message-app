import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const SkeletonBox = (props) => {
  const { height, width, rounded, circle } = props;
  console.log(height);
  return (
    <div
      className={`skeleton-box ${rounded ? "rounded" : ""} ${
        circle ? "circle" : ""
      }`}
      style={{ height, width }}
    ></div>
  );
};

SkeletonBox.defaultProps = {
  height: "20",
  width: "100",
  rounded: false,
  circle: false,
};

SkeletonBox.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  rounded: PropTypes.bool,
  circle: PropTypes.bool,
};

export default SkeletonBox;
