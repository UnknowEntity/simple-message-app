import React from "react";
import PropTypes from "prop-types";
import "./style.css";

/**
 *
 * @param {{
 * size: Number}} props
 * @returns
 */
const BubbleAnimation = (props) => {
  const { size } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 450 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="bubble-animation">
        <g id="bubbles">
          <g transform="translate(132,100)">
            <circle
              id="bubble-large"
              r="70"
              fill="white"
              stroke="#B411A7"
              stroke-width="10"
              fillOpacity="0"
            />
          </g>
          <g transform="translate(328,218)">
            <circle
              cX="328"
              cY="218"
              id="bubble-medium"
              r="60"
              fill="#B411A7"
            />
          </g>
          <g transform="translate(230,353)">
            <circle
              id="bubble-small"
              r="50"
              fill="white"
              stroke="#B411A7"
              stroke-width="30"
              fillOpacity="0"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

BubbleAnimation.propTypes = {
  size: PropTypes.number,
};

BubbleAnimation.defaultProps = {
  size: 450,
};

export default BubbleAnimation;
