import React from "react";
import PropTypes from "prop-types";
import "./style.css";

/**
 *
 * @param {height: Number} props
 * @returns
 */
const TypingAnimation = (props) => {
  const { height } = props;
  return (
    <svg
      width={`${height * 2.5}`}
      height={height}
      viewBox="0 0 500 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="typing-animation">
        <g id="circle-group">
          <g id="circle-first-frame" transform="translate(65,98.5)">
            <circle id="circle-first" r="45" fill="white" />
          </g>
          <g id="circle-second-frame" transform="translate(205,98.5)">
            <circle id="circle-second" r="45" fill="white" />
          </g>
          <g id="circle-third-frame" transform="translate(345,98.5)">
            <circle id="circle-third" r="45" fill="white" />
          </g>
        </g>
      </g>
    </svg>
  );
};

TypingAnimation.defaultProps = {
  height: 30,
};

TypingAnimation.propTypes = {
  height: PropTypes.number,
};

export default TypingAnimation;
