import React, { useEffect, useState } from "react";

const TestPage = (prop) => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/users/private", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setMessage(res.message);
      });
  }, []);

  return <div>{message}</div>;
};

export default TestPage;
