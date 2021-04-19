import React from "react";
import PropTypes from "prop-types";
import "./style.css";

/**
 *
 * @param {{height:number}} props
 * @returns
 */
const LoadingBubbles = (props) => {
  const { height } = props;
  return (
    <svg
      width={height * 2.8}
      height={height}
      viewBox="0 0 700 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="loading-animation">
        <rect width="700" height="250" fill="white" fillOpacity="0" />
        <g id="loading-bubbles">
          <g transform="translate(54,125)">
            <circle id="bubble-one" r="50" />
          </g>
          <g transform="translate(54,125)" id="bubble-two">
            <circle r="50" />
          </g>
          <g transform="translate(54,125)" id="bubble-three">
            <circle r="50" />
          </g>
          <g transform="translate(54,125)" id="bubble-four">
            <circle r="50" />
          </g>
          <g transform="translate(54,125)" id="bubble-five">
            <circle r="50" />
          </g>
        </g>
      </g>
    </svg>
  );
};

LoadingBubbles.defaultProps = {
  height: 250,
};

LoadingBubbles.propTypes = {
  height: PropTypes.number,
};

export default LoadingBubbles;
