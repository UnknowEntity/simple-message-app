import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export const FontSize = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
};

export const InputType = {
  EMAIL: "email",
  PASSWORD: "password",
};

/**
 *
 * @param {{
 * value: String,
 * placeholder: String
 * id: String
 * size: String
 * center: boolean
 * type: String
 * onChange: Function
 * isFocus:boolean
 * selectwFocus:boolean}} props
 * @returns
 */
const InputText = (props) => {
  const {
    value,
    placeholder,
    id,
    size,
    center,
    type,
    onChange,
    isFocus,
    selectwFocus,
  } = props;
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      className={`text ${size} ${center ? "center" : ""}`}
      onChange={(e) => onChange(e.target.value)}
      autoFocus={isFocus}
      onFocus={(e) => {
        if (isFocus && selectwFocus) {
          e.currentTarget.select();
        }
      }}
    />
  );
};

InputText.defaultProps = {
  id: Math.random().toString(),
  placeholder: "",
  value: "",
  size: FontSize.SMALL,
  center: false,
  type: "text",
  isFocus: false,
  onChange: () => {},
  selectwFocus: false,
};

InputText.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  center: PropTypes.bool,
  onChange: PropTypes.func,
  isFocus: PropTypes.bool,
  selectwFocus: PropTypes.bool,
};

export default InputText;
