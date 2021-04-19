import React from "react";
import PropTypes from "prop-types";
import "./style.css";

/**
 *
 * @param {{
 * value: string,
 * onChange: Function,
 * enter: boolean,
 * enterEvent: Function,
 * size: string,
 * disabled: boolean}} props
 * @returns
 */
const Textarea = (props) => {
  const { value, onChange, enter, enterEvent, size, disabled } = props;
  const keyPress = (e) => {
    if (e.key === "Enter" || e.keyCode === "13") {
      if (!e.shiftKey) {
        enterEvent();
        e.preventDefault();
      }
    }
  };

  if (enter) {
    return (
      <textarea
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        wrap="hard"
        onKeyPress={(e) => keyPress(e)}
        value={value}
      ></textarea>
    );
  }

  return (
    <textarea
      onChange={(e) => onChange(e.target.value)}
      wrap="hard"
      className={`textarea ${size}`}
      value={value}
    ></textarea>
  );
};

Textarea.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  enter: PropTypes.bool,
  enterEvent: PropTypes.func,
  height: PropTypes.string,
  width: PropTypes.string,
  maxHeight: PropTypes.string,
  maxWidth: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
};

Textarea.defaultProps = {
  value: "",
  onChange: () => {},
  enter: false,
  enterEvent: () => {},
  height: "100%",
  width: "100%",
  maxHeight: "100%",
  maxWidth: "100%",
  size: "medium",
  disabled: false,
};

export default Textarea;
