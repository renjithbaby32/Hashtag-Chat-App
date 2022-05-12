import React, { useEffect, useState } from 'react';
import { ChatBody, ChatHeader, ChatFooter } from '../components';

export const ChatComponent = () => {
  const [messages, setMessage] = useState(
    localStorage.getItem('messages')
      ? JSON.parse(localStorage.getItem('messages') as string)
      : []
  );

  const sendMessageHandler = (message: any) => {
    setMessage((prev: any) => [...prev, message]);
  };

  useEffect(() => {
    messages.length &&
      localStorage.setItem('messages', JSON.stringify(messages));
  }, [messages]);

  return (
    <>
      <ChatHeader />
      <ChatBody messages={messages} />
      <ChatFooter sendMessageHandler={sendMessageHandler} />
    </>
  );
};
