import React, { useState } from 'react';

import './App.css';
import Header from './components/header/Header';

import { Note } from './models/note.model';

function App() {

  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date()).toString(),
    title: "Meetings",
    text: 'Schedule meeting with UI/UX Team',
    color: 'lightgray',
    date: (new Date()).toString()
  }]);

  return (
    <>
      <Header />
    </>
  );
}

export default App;
