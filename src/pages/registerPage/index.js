import React, { useState } from "react";
import { Helmet } from "react-helmet";
import LogRegisterTemplate from "../../components/templates/logRegisterTemplate";
import RegisterButtonGroup from "../../components/molecules/registerButtonGroup";
import RegisterInputField from "../../components/molecules/registerInputField";
import { Redirect } from "react-router";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [warningMessage, setMessage] = useState("");
  const [failed, setFailed] = useState(false);
  const [isClicked, clicked] = useState(false);
  const [fixField, setFixField] = useState("");
  const [redirect, setRedirect] = useState(false);

  if (redirect) {
    return <Redirect push to="/login" />;
  }

  const registerAccount = () => {
    if (username.length === 0) {
      setMessage("please write your username");
      setFailed(true);
      setFixField("username");
      return;
    } else if (email.length === 0) {
      setMessage("please write your email");
      setFailed(true);
      setFixField("email");
      return;
    } else if (password.length === 0) {
      setMessage("please write your password");
      setFailed(true);
      setFixField("password");
      return;
    } else if (displayName.length === 0) {
      setMessage("please write your display name");
      setFailed(true);
      setFixField("displayName");
      return;
    }
    clicked(true);
    fetch("http://localhost:3000/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        displayName,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (!isNaN(res.id)) {
          setRedirect(true);
        } else {
          setMessage(res.message);
          setFailed(true);
          clicked(false);
        }
      })
      .catch((err) => {
        setMessage(err.message);
        setFailed(true);
        clicked(false);
      });
  };

  return (
    <>
      <LogRegisterTemplate
        inputField={
          <RegisterInputField
            username={username}
            password={password}
            email={email}
            displayName={displayName}
            failedRegister={failed}
            warningMessage={warningMessage}
            setUsername={setUsername}
            setPassword={setPassword}
            setEmail={setEmail}
            setDisplayName={setDisplayName}
            focusField={fixField}
          />
        }
        buttonGroup={
          <RegisterButtonGroup
            onRegister={registerAccount}
            isClicked={isClicked}
          />
        }
      />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register</title>
      </Helmet>
    </>
  );
};

export default RegisterPage;
