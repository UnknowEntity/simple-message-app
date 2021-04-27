import React, { useState, useEffect, useContext } from "react";
import { Helmet } from "react-helmet";
import { SocketContext } from "../../context/socket";
//import socketIOClient from "socket.io-client";
import Moment from "moment";
import RecentMessageTemplate from "../../components/templates/recentMessageTemplate";
import RecentMessageList from "../../components/organisms/recentMessageList";
import MessageFrame from "../../components/organisms/messageFrame";
import { Redirect, useParams } from "react-router";

const RecentMessagePage = () => {
  const { id } = useParams();
  const [recentList, setRecentList] = useState([]);
  const [messageList, setMessageList] = useState([]);
  const [myInfo, setInfo] = useState({ id: -1, name: "" });
  const [faileRedirect, setFaileRedirect] = useState(false);
  const [status, setStatus] = useState(0);
  const [onlineList, setOnlineList] = useState({});
  const [isDeclare, setIsDeclare] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const [otherUnsendMessageIndex, setOtherUnsendMessageIndex] = useState(0);
  let count = 0;
  let messageCount = 0;

  // const socket = socketIOClient("http://localhost:3000/message", {
  //   withCredentials: true,
  // });

  const socket = useContext(SocketContext);

  useEffect(() => {
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
        if (res.recentList.length !== 0) {
          setRecentList(res.recentList);
          setInfo(res.info);
        } else {
          setStatus(2);
        }
      })
      .catch((err) => {
        setFaileRedirect(true);
      });
  }, [count]);

  useEffect(() => {
    if (isNaN(id)) {
      return;
    }
    setStatus(0);
    setMessageList([]);
    fetch(`http://localhost:3000/messages/newest/${id}?count=${messageCount}`, {
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
        setMessageList(
          res.reverse().map((value) => {
            return {
              content: value.content,
              date: value.date,
              isTyping: false,
              type: value.senderId === parseInt(id) ? "other" : "me",
            };
          })
        );
        setStatus(1);
      })
      .catch((err) => {
        setFaileRedirect(true);
      });
  }, [id, messageCount]);

  useEffect(() => {
    const emitOnline = (data) => {
      const { id, returnId } = data;
      if (id === myInfo.id) {
        socket.emit("yes online", { id: myInfo.id, askerId: returnId });
      }
    };
    socket.on("online check", emitOnline);
    return () => {
      socket.off("online check", emitOnline);
    };
  }, [socket, myInfo]);

  useEffect(() => {
    const addOnlineList = (data) => {
      const { id, returnId } = data;
      let tempOnlineList = { ...onlineList };
      tempOnlineList[id] = returnId;
      setOnlineList(tempOnlineList);
    };
    socket.on("yes online", addOnlineList);
    return () => {
      socket.off("yes online", addOnlineList);
    };
  }, [socket, onlineList]);

  useEffect(() => {
    const setOtherIsTyping = (data) => {
      const { senderId } = data;
      if (parseInt(id) === senderId) {
        setOtherUnsendMessageIndex(messageList.length);
        setMessageList([...messageList, { isTyping: true, type: "other" }]);
      }
    };
    socket.on("is typing", setOtherIsTyping);
    return () => {
      socket.off("is typing", setOtherIsTyping);
    };
  }, [socket, id, messageList]);

  useEffect(() => {
    const setOtherStopTyping = (data) => {
      const { senderId } = data;
      if (parseInt(id) === senderId) {
        setMessageList([
          ...messageList.slice(0, otherUnsendMessageIndex),
          ...messageList.slice(otherUnsendMessageIndex + 1),
        ]);
      }
    };
    socket.on("stop typing", setOtherStopTyping);
    return () => {
      socket.off("stop typing", setOtherStopTyping);
    };
  }, [socket, id, messageList, otherUnsendMessageIndex]);

  useEffect(() => {
    const userOfflineEvent = (data) => {
      const { id } = data;
      let keysArray = Object.keys(onlineList);
      let valueArray = Object.values(onlineList);
      if (valueArray.indexOf(id) !== -1) {
        let tempOnlineList = { ...onlineList };
        tempOnlineList[keysArray[valueArray.indexOf(id)]] = undefined;
        setOnlineList(tempOnlineList);
      }
    };
    socket.on("user offline", userOfflineEvent);

    return () => {
      socket.off("user offline", userOfflineEvent);
    };
  }, [socket, onlineList]);

  useEffect(() => {
    const newMessageEvent = (data) => {
      const { senderId, senderName, date, content, socketId } = data;
      if (senderId === parseInt(id)) {
        let newMessagePosition =
          otherUnsendMessageIndex !== -1
            ? otherUnsendMessageIndex
            : messageList.length;
        let tempMessage = {
          content,
          date,
          type: "other",
          isTyping: false,
        };
        setMessageList([
          ...messageList.slice(0, newMessagePosition),
          tempMessage,
          ...messageList.slice(newMessagePosition + 1),
        ]);
      } else if (senderId !== parseInt(id)) {
        let tempCurrentUserIndex = -1;
        for (let index = 0; index < recentList.length; index++) {
          if (senderId === recentList[index].id) {
            tempCurrentUserIndex = index;
          }
        }
        let tempRecentList = [...recentList];
        if (tempCurrentUserIndex === -1) {
          tempRecentList.unshift({
            name: senderName,
            id: senderId,
            content,
            senderId,
            date,
            unread: true,
          });
          let tempOnlineList = { ...onlineList };
          tempOnlineList[`${senderId}`] = socketId;
          setOnlineList(tempOnlineList);
          setRecentList(tempRecentList);
        } else if (tempCurrentUserIndex !== -1) {
          let tempCurrentUser = { ...tempRecentList[tempCurrentUserIndex] };
          tempRecentList = [
            ...tempRecentList.slice(0, tempCurrentUserIndex),
            ...tempRecentList.slice(tempCurrentUserIndex + 1),
          ];
          tempRecentList = [
            {
              ...tempCurrentUser,
              content,
              senderId: senderId,
              date,
              unread: true,
            },
            ...tempRecentList,
          ];
          if (onlineList[`${senderId}`] === undefined) {
            let tempOnlineList = { ...onlineList };
            tempOnlineList[`${senderId}`] = socketId;
            setOnlineList(tempOnlineList);
          }
          setRecentList(tempRecentList);
        }
      }
    };

    socket.on("send message", newMessageEvent);

    return () => {
      socket.off("send message", newMessageEvent);
    };
  }, [
    socket,
    id,
    messageList,
    onlineList,
    otherUnsendMessageIndex,
    recentList,
  ]);

  const updateMessageList = (content, sendTimeStamp) => {
    let date = Moment(sendTimeStamp).format("YYYY-MM-DD HH:mm:ss");
    let tempRecentList = [...recentList];
    let tempCurrentUserIndex = -1;
    for (let index = 0; index < tempRecentList.length; index++) {
      if (parseInt(id) === tempRecentList[index].id) {
        tempCurrentUserIndex = index;
      }
    }

    if (onlineList[id] !== undefined) {
      socket.emit("send message", {
        name: myInfo.name,
        date,
        id: myInfo.id,
        content,
        otherSocketId: onlineList[id],
      });
    }

    if (tempCurrentUserIndex !== 0) {
      let tempCurrentUser = { ...tempRecentList[tempCurrentUserIndex] };
      tempRecentList = [
        ...tempRecentList.slice(0, tempCurrentUserIndex),
        ...tempRecentList.slice(tempCurrentUserIndex + 1),
      ];
      tempRecentList = [
        {
          ...tempCurrentUser,
          content,
          senderId: myInfo.id,
          date,
          unread: false,
        },
        ...tempRecentList,
      ];
    } else if (tempCurrentUserIndex === 0) {
      tempRecentList[0] = {
        ...tempRecentList[0],
        content,
        senderId: myInfo.id,
        date,
        unread: false,
      };
    }
    setRecentList(tempRecentList);
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
        date,
        unread: 1,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res.success) {
          //console.log(res.messageId);
        }
      });
  };

  const emitIsTyping = () => {
    if (onlineList[id] !== undefined) {
      socket.emit("is typing", {
        myId: myInfo.id,
        otherSocketId: onlineList[id],
      });
    }
  };

  const emitStopTyping = () => {
    if (onlineList[id] !== undefined) {
      socket.emit("stop typing", {
        myId: myInfo.id,
        otherSocketId: onlineList[id],
      });
    }
  };

  if (myInfo.id !== -1 && !isDeclare) {
    socket.emit("declare is online", { id: myInfo.id });
    setIsDeclare(true);
  }

  if (recentList.length !== 0 && !isCheck) {
    recentList.forEach((element) => {
      socket.emit("online check", { id: element.id });
    });
    setIsCheck(true);
  }

  if (faileRedirect) {
    return <Redirect push to="/" />;
  }

  if (isNaN(id) && recentList.length !== 0) {
    return <Redirect to={`/message/${recentList[0].id}`} />;
  }

  return (
    <>
      <RecentMessageTemplate
        recentMessageSideBar={
          <RecentMessageList
            recentList={recentList}
            choice={parseInt(id)}
            onlineList={onlineList}
          />
        }
        messageFrame={
          <MessageFrame
            messageList={messageList}
            setMessageList={setMessageList}
            updateMessageList={updateMessageList}
            status={status}
            emitIsTyping={emitIsTyping}
            emitStopTyping={emitStopTyping}
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
