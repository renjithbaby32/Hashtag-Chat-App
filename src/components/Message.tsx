import React from 'react';
import { Avatar } from './Avatar';

export const Message = ({ message }: { message: string }) => {
  return (
    <div className="message-container message-right d-flex align-items-center justify-content-center mb-2">
      <div className="message p-2">{message}</div>
      <Avatar />
    </div>
  );
};
