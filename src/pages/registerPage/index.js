import React, { useState } from "react";
import LogRegisterTemplate from "../../components/templates/logRegisterTemplate";
import RegisterButtonGroup from "../../components/molecules/registerButtonGroup";
import RegisterInputField from "../../components/molecules/registerInputField";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <LogRegisterTemplate
      inputField={RegisterInputField({
        username,
        password,
        email,
        setUsername,
        setPassword,
        setEmail,
      })}
      buttonGroup={RegisterButtonGroup()}
    />
  );
};

export default RegisterPage;
