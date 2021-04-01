import React from "react";
import InputText, { FontSize, InputType } from "../../atoms/inputText";

const RegisterInputField = (props) => {
  const {
    username,
    password,
    email,
    setUsername,
    setPassword,
    setEmail,
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
      />
      <InputText
        id="email"
        value={email}
        placeholder="your email"
        size={FontSize.LARGE}
        center
        type={InputType.EMAIL}
        onChange={setEmail}
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

export default RegisterInputField;
