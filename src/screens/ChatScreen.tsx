import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { ChatComponent, RightSidebar, Sidebar } from '../components';

export const ChatScreen = () => {
  return (
    <Row>
      <Col md={1}>
        <Sidebar />
      </Col>
      <Col md={8}>
        <ChatComponent />
      </Col>
      <Col md={3} className="p-0">
        <RightSidebar />
      </Col>
    </Row>
  );
};
