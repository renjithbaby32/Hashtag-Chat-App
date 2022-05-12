import React, { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';

export const ChatFooter = ({
  sendMessageHandler,
}: {
  sendMessageHandler: (message: string) => void;
}) => {
  const [inputMsg, setInputMsg] = useState('');

  const messageSubmit = (e: any): void => {
    e.preventDefault();

    if (inputMsg.trim()) {
      sendMessageHandler(inputMsg);
      setInputMsg('');
    }
  };

  return (
    <>
      <div className="bg-white chat-input-container p-0">
        <Form onSubmit={messageSubmit}>
          <Col xs={12} className="d-flex">
            <input
              type="text"
              value={inputMsg}
              onChange={(e) => setInputMsg(e.target.value)}
              placeholder="Message"
              className="bg-white text-dark w-100  m-0 chat-input"
            />
            <Button
              type="submit"
              variant="info"
              className="send-btn mx-1 d-flex align-items-center justify-content-center p-1"
            >
              <svg fill="#fff" height="24" width="24">
                <path d="M3 20V4L22 12ZM5 17 16.85 12 5 7V10.5L11 12L5 13.5ZM5 17V12V7V10.5V13.5Z" />
              </svg>
            </Button>
          </Col>
        </Form>
      </div>
    </>
  );
};
