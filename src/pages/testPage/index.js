import React, { useEffect, useState } from "react";
import Button from "../../components/atoms/buttons";
import MessageView from "../../components/molecules/messageView";

const TestPage = (prop) => {
  const [messageList, setMessageList] = useState([
    { content: "yo wanna come over", date: Date.now(), type: "other" },
  ]);
  const [myUnsendMessageIndex, setMyUnsendMessageIndex] = useState(0);

  const [herUnsendMessageIndex, setHerUnsendMessageIndex] = useState(0);
  useEffect(() => {
    if (messageList[messageList.length - 1].isTyping === false) {
      if (messageList[messageList.length - 2].isTyping === true) {
        if (messageList.length - 2 === myUnsendMessageIndex) {
          setMyUnsendMessageIndex(myUnsendMessageIndex + 1);
        } else if (messageList.length - 2 === herUnsendMessageIndex) {
          setHerUnsendMessageIndex(herUnsendMessageIndex + 1);
        }
        let newMessageList = [...messageList];
        let tempMessage = newMessageList[newMessageList.length - 1];
        newMessageList[newMessageList.length - 1] =
          newMessageList[newMessageList.length - 2];
        newMessageList[newMessageList.length - 2] = tempMessage;
        setMessageList(newMessageList);
      }
    }
  }, [messageList, herUnsendMessageIndex, myUnsendMessageIndex]);
  const otherMessage = {
    isTyping: true,
    content: "Ok then",
    type: "other",
  };
  const myMessage = {
    isTyping: true,
    content: "yeah sure",
    type: "me",
  };
  const iAmTyping = () => {
    setMyUnsendMessageIndex(messageList.length);
    setMessageList([...messageList, myMessage]);
  };
  const sheIsTyping = () => {
    setHerUnsendMessageIndex(messageList.length);
    setMessageList([...messageList, otherMessage]);
  };

  const iSend = () => {
    setMessageList([
      ...messageList.slice(0, myUnsendMessageIndex),
      {
        ...messageList[myUnsendMessageIndex],
        isTyping: false,
        date: Date.now(),
      },
      ...messageList.slice(myUnsendMessageIndex + 1),
    ]);
  };

  const sheSend = () => {
    setMessageList([
      ...messageList.slice(0, herUnsendMessageIndex),
      {
        ...messageList[herUnsendMessageIndex],
        isTyping: false,
        date: Date.now(),
      },
      ...messageList.slice(herUnsendMessageIndex + 1),
    ]);
  };
  return (
    <div>
      <MessageView messageList={messageList} />
      <Button onClick={() => iAmTyping()}>I am Typing</Button>
      <Button onClick={() => iSend()} border>
        I send
      </Button>
      <Button onClick={() => sheIsTyping()}>She is Typing</Button>
      <Button onClick={() => sheSend()} border>
        She send
      </Button>
    </div>
  );
};

export default TestPage;
