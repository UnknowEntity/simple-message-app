import React, { useState } from "react";
import PropTypes from "prop-types";
import InputText, { FontSize, InputType } from "../../atoms/inputText";
import Warning from "../../atoms/warning";

/**
 *
 * @param {{
 * username:string,
 * password:string,
 * email:string,
 * displayName:string
 * warningMessage:string,
 * failedRegister:boolean,
 * setEmail:Function,
 * setPassword:Function,
 * setUsername:Function
 * setDisplayName:Function
 * focusField:string}} props
 * @returns
 */
const RegisterInputField = (props) => {
  const {
    username,
    password,
    email,
    displayName,
    warningMessage,
    failedRegister,
    setUsername,
    setPassword,
    setEmail,
    setDisplayName,
    focusField,
  } = props;

  const [field, setField] = useState({
    username: false,
    email: false,
    displayName: false,
    password: false,
  });

  if (focusField !== "" && field[focusField] !== true) {
    let tempValue = { ...field };
    tempValue[focusField] = true;
    console.log(tempValue);
    setField(tempValue);
  }
  return (
    <>
      <InputText
        id="user-name"
        value={username}
        placeholder="your username"
        size={FontSize.LARGE}
        center
        onChange={setUsername}
        isFocus={field.username}
      />
      <InputText
        id="email"
        value={email}
        placeholder="your email"
        size={FontSize.LARGE}
        center
        type={InputType.EMAIL}
        onChange={setEmail}
        isFocus={field.email}
      />
      <InputText
        id="display-name"
        value={displayName}
        placeholder="your display name"
        size={FontSize.LARGE}
        center
        onChange={setDisplayName}
        isFocus={field.displayName}
      />
      <InputText
        id="password"
        value={password}
        placeholder="your password"
        size={FontSize.LARGE}
        center
        type={InputType.PASSWORD}
        onChange={setPassword}
        isFocus={field.password}
      />
      <Warning message={warningMessage} isShow={failedRegister} />
    </>
  );
};

RegisterInputField.propTypes = {
  username: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  displayName: PropTypes.string,
  warningMessage: PropTypes.string,
  failedRegister: PropTypes.bool,
  setUsername: PropTypes.func,
  setEmail: PropTypes.func,
  setPassword: PropTypes.func,
  setDisplayName: PropTypes.func,
};

export default RegisterInputField;
