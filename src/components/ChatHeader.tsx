import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { HeaderRightIcons } from '../components';

export const ChatHeader = () => {
  const [date, setDate] = useState(new Date());

  return (
    <Row>
      <Col md={4}>
        You are talking to <span className={'font-weight-bold'}>user</span>
      </Col>
      <Col>{`${date.getDate()} - ${date.getMonth()} - ${date.getFullYear()}`}</Col>
      <Col md={3}>
        <HeaderRightIcons />
      </Col>
    </Row>
  );
};
