import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './App.css';
import Header from './components/header/Header';
import NotesList from './components/notes-list/NotesList';

import { Note } from './models/note.model';

function App() {

  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date).toString(),
    title: "Meetings",
    text: 'Schedule meeting with UI/UX Team',
    color: 'black',
    date: (new Date).toString()
  }]);

  console.log(notes)

  return (
    <>
      <Header />
      <Container className='mt-5'>
        <Row>
          <Col>
            <NotesList notes={notes} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
