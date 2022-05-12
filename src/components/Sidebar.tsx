import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Avatar } from './Avatar';

const randomColor = ['', 'yellow', '', 'blue'];

export const Sidebar = () => {
  return (
    <>
      <Container>
        <Row>
          {[...new Array(5)].map((_, index) => (
            <Col key={index} xs={12}>
              <div className="my-2">
                <Avatar
                  showOnline={true}
                  color={randomColor[Math.floor(Math.random() * 10) + 3]}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
