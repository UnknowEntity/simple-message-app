import React, { useState } from "react";
import LogRegisterTemplate from "../../components/templates/logRegisterTemplate";
import RegisterButtonGroup from "../../components/molecules/registerButtonGroup";
import RegisterInputField from "../../components/molecules/registerInputField";
import { Redirect } from "react-router";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [redirect, setRedirect] = useState(false);

  const registerAccount = () => {
    fetch("http://localhost:3000/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (!isNaN(res.id)) {
          setRedirect(true);
        }
      });
  };

  if (redirect) {
    return <Redirect push to="/login" />;
  }
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
      buttonGroup={RegisterButtonGroup({ onRegister: registerAccount })}
    />
  );
};

export default RegisterPage;
