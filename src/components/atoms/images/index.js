import React from "react";
import PropTypes from "prop-types";
import "./style.css";

/**
 *
 * @param {{
 * src:String,
 * height: Number,
 * width: Number,
 * shape: String}} props
 * @returns
 */
const Image = (props) => {
  const { src, height, width, circle } = props;
  return (
    <img
      src={"/unknown-profile.png"}
      alt={src}
      height={height}
      width={width}
      className={`${circle ? "circle" : ""}`}
    />
  );
};

Image.defaultProps = {
  height: 20,
  width: 20,
  circle: false,
};

Image.propTypes = {
  src: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

export default Image;
