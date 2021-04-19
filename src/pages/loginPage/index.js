import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import LogRegisterTemplate from "../../components/templates/logRegisterTemplate";
import LoginInputField from "../../components/molecules/loginInputField";
import LoginButtonGroup from "../../components/molecules/loginButtonGroup";
import { Redirect } from "react-router";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [warningMessage, setMessage] = useState("");
  const [failed, setFailed] = useState(false);
  const [isClicked, clicked] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [isAuth, setMainPage] = useState(false);

  useEffect(() => {
    const chechToken = () => {
      fetch("http://localhost:3000/auth", {
        method: "GET",
        credentials: "include",
        mode: "cors",
        headers: {
          accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.success) {
            setMainPage(true);
          }
        });
    };
    chechToken();
  }, []);

  const loginAccount = () => {
    clicked(true);
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
        if (!res.err) {
          setRedirect(true);
        } else {
          setFailed(true);
          setMessage(res.message);
        }
      });
  };

  if (redirect) {
    return <Redirect push to={`/message`} />;
  }

  if (isAuth) {
    return <Redirect to={"/message"} />;
  }
  return (
    <>
      <LogRegisterTemplate
        inputField={
          <LoginInputField
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
            warningMessage={warningMessage}
            failedLogin={failed}
          />
        }
        buttonGroup={
          <LoginButtonGroup onLogin={loginAccount} isClicked={isClicked} />
        }
      />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
      </Helmet>
    </>
  );
};

export default LoginPage;
