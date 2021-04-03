import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export const ButtonSize = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
};

export const ButtonColor = {
  BLUE: "blue",
  RED: "red",
  GREEN: "green",
  YELLOW: "yellow",
};

/**
 *
 * @param {{
 * color: string,
 * size: string,
 * onClick: Function,
 * children: React.Node,
 * disabled: boolean
 * border: boolean}} props
 * @returns
 */
const Button = (props) => {
  const { color, onClick, children, size, disabled, border } = props;
  let disable = disabled ? "disabled" : "";
  const classProps = `${color} ${size} ${disable} ${border ? "border" : ""}`;

  return (
    <button
      type="button"
      onClick={() => onClick()}
      disabled={disabled}
      className={classProps}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "default",
  size: ButtonSize.MEDIUM,
  onClick: () => {},
  disabled: false,
  border: false,
};

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  border: PropTypes.bool,
};

export default Button;
