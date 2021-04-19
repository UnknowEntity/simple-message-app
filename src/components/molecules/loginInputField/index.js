import React from "react";
import InputText, { FontSize, InputType } from "../../atoms/inputText";
import Warning from "../../atoms/warning";

const LoginInputField = (props) => {
  const {
    username,
    password,
    warningMessage,
    failedLogin,
    setUsername,
    setPassword,
  } = props;
  return (
    <>
      <InputText
        id="user-name"
        value={username}
        placeholder="your username"
        size={FontSize.LARGE}
        center
        onChange={setUsername}
        autofo
      />
      <InputText
        id="password"
        value={password}
        placeholder="your password"
        size={FontSize.LARGE}
        center
        type={InputType.PASSWORD}
        onChange={setPassword}
      />
      <Warning message={warningMessage} isShow={failedLogin} />
    </>
  );
};

export default LoginInputField;
