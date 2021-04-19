import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
//import { io } from "socket.io-client";
import Moment from "moment";
import RecentMessageTemplate from "../../components/templates/recentMessageTemplate";
import RecentMessageList from "../../components/organisms/recentMessageList";
import MessageFrame from "../../components/organisms/messageFrame";
import { Redirect, useParams } from "react-router";

const RecentMessagePage = () => {
  const { id } = useParams();
  const [recentList, setRecentList] = useState([]);
  const [messageList, setMessageList] = useState([]);
  const [faileRedirect, setFaileRedirect] = useState(false);
  const [redirectWithParam, setRedirectWithParams] = useState({
    value: false,
    id: null,
  });
  const [status, setStatus] = useState(0);
  const count = 0;
  const messageCount = 0;

  useEffect(() => {
    const getRecentList = async (id, count) => {
      fetch(`http://localhost:3000/messages/recent?count=${count}`, {
        method: "GET",
        credentials: "include",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.length !== 0) {
            if (isNaN(id)) {
              setRedirectWithParams({ value: true, id: res[0].id });
              return;
            }
            setRecentList(res);
          } else {
            setStatus(2);
          }
        })
        .catch((err) => {
          setFaileRedirect(true);
        });
    };
    getRecentList(id, count);
  }, [id, count]);

  useEffect(() => {
    if (isNaN(id)) {
      return;
    }
    const getMessageList = async (otherId, messageCount) => {
      fetch(
        `http://localhost:3000/messages/newest/${otherId}?count=${messageCount}`,
        {
          method: "GET",
          credentials: "include",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((res) => {
          setMessageList(
            res.reverse().map((value) => {
              return {
                content: value.content,
                date: value.date,
                isTyping: false,
                type: value.senderId === parseInt(otherId) ? "other" : "me",
              };
            })
          );
          setStatus(1);
        })
        .catch((err) => {
          setFaileRedirect(true);
        });
    };
    getMessageList(id, messageCount);
  }, [id, messageCount]);
  // const socket = io({
  //   query: {
  //     id: id,
  //   },
  // });

  // socket.on("hey", (serverMessage) => {
  //   console.log(serverMessage);
  // });

  const updateMessageList = (content) => {
    fetch("http://localhost:3000/messages/add", {
      method: "POST",
      credentials: "include",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        receiverId: id,
        content: content,
        date: Moment().format("YYYY-MM-DD HH:mm:ss"),
        unread: 1,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res.success) {
          console.log(res.messageId);
        }
      });
  };
  if (faileRedirect) {
    return <Redirect push to="/" />;
  }

  if (redirectWithParam.value && isNaN(id)) {
    return <Redirect to={`/message/${redirectWithParam.id}`} />;
  }
  return (
    <>
      <RecentMessageTemplate
        recentMessageSideBar={
          <RecentMessageList recentList={recentList} choice={parseInt(id)} />
        }
        messageFrame={
          <MessageFrame
            messageList={messageList}
            setMessageList={setMessageList}
            updateMessageList={updateMessageList}
            status={status}
          />
        }
      />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Your Message</title>
      </Helmet>
    </>
  );
};

export default RecentMessagePage;
