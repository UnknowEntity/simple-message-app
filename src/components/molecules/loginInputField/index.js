import React from "react";
import InputText, { FontSize, InputType } from "../../atoms/inputText";

const LoginInputField = (props) => {
  const { username, password, setUsername, setPassword } = props;
  return (
    <>
      <InputText
        id="user-name"
        value={username}
        placeholder="your username"
        size={FontSize.LARGE}
        center
        onChange={setUsername}
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
    </>
  );
};

export default LoginInputField;
