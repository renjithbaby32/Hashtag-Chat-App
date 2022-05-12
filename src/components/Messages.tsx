import React from 'react';
import { Message } from '../components';

export const Messages = ({ messages }: { messages: string[] }) => {
  return (
    <div className="w-100 d-flex flex-column">
      {messages.map((message, index) => (
        <Message key={`${message} ${index}`} message={message}></Message>
      ))}
    </div>
  );
};
