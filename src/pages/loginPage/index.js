import React, { useState } from "react";
import LogRegisterTemplate from "../../components/templates/logRegisterTemplate";
import LoginInputField from "../../components/molecules/loginInputField";
import LoginButtonGroup from "../../components/molecules/loginButtonGroup";
import { Redirect } from "react-router";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [userid, setUserId] = useState(-1);

  const loginAccount = () => {
    fetch("http://localhost:3000/users/login", {
      method: "POST",
      credentials: "include",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setUserId(res.user.id);
        setRedirect(true);
      });
  };

  if (redirect) {
    return <Redirect push to={`/message/${userid}`} />;
  }
  return (
    <LogRegisterTemplate
      inputField={LoginInputField({
        username,
        password,
        setUsername,
        setPassword,
      })}
      buttonGroup={LoginButtonGroup({ onLogin: loginAccount })}
    />
  );
};

export default LoginPage;
