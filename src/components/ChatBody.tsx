import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Messages } from '../components';

export const ChatBody = ({ messages }: { messages: string[] }) => {
  return (
    <div className={'chat-body'}>
      <Row className={'text-center'}>
        <Col>
          <Button className={'btn-light badge-pill'}>
            Show previous discussion
          </Button>
        </Col>
      </Row>
      <Messages messages={messages} />
    </div>
  );
};
