import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './App.css';
import Header from './components/header/Header';
import NotesList from './components/notes-list/NotesList';

import { Note } from './models/note.model';

function App() {

  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date()).toString(),
    title: "Meetings",
    text: 'Schedule meeting with UI/UX Team',
    color: '#F8F8FF',
    date: (new Date()).toString()
  }]);

  return (
    <>
      <Header />
      <Container className='mt-5'>
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
