import React from "react";
import BubbleAnimation from "../../animations/bubble";
import "./style.css";

/**
 *
 * @param {{
 * inputField: any,
 * buttonGroup: any,
 * logo: any}} props
 * @returns
 */
const LogRegisterTemplate = (props) => {
  const { inputField, buttonGroup } = props;
  return (
    <div className="login-register-frame">
      <div className="center-struct">
        <div className="logo">
          <BubbleAnimation size={300} />
        </div>
        <div className="input-field"> {inputField}</div>
        <div className="button-group"> {buttonGroup}</div>
      </div>
    </div>
  );
};

export default LogRegisterTemplate;
