import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import { ChatScreen } from './screens/ChatScreen';

function App() {
  return (
    <>
      <Container fluid>
        <ChatScreen />
      </Container>
    </>
  );
}

export default App;
