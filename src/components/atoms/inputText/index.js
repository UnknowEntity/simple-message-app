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
 * onChange: Function}} props
 * @returns
 */
const InputText = (props) => {
  const { value, placeholder, id, size, center, type, onChange } = props;
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      className={`text ${size} ${center ? "center" : ""}`}
      onChange={(e) => onChange(e.target.value)}
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
  onChange: () => {},
};

InputText.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  center: PropTypes.bool,
  onChange: PropTypes.func,
};

export default InputText;
