import React, { useState } from "react";
import LogRegisterTemplate from "../../components/templates/logRegisterTemplate";
import LoginInputField from "../../components/molecules/loginInputField";
import LoginButtonGroup from "../../components/molecules/loginButtonGroup";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <LogRegisterTemplate
      inputField={LoginInputField({
        username,
        password,
        setUsername,
        setPassword,
      })}
      buttonGroup={LoginButtonGroup()}
    />
  );
};

export default LoginPage;
