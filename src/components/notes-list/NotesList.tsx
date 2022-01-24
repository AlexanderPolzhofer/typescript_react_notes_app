import * as React from 'react';
import { Note } from '../../models/note.model';

import Notes from '../notes/Notes';

export interface INotesListProps {
    notes: Note[]
}

const NotesList: React.FC<INotesListProps> = ({ notes }) => {

    const renderNotes = () => {
        return notes.map(note =>
            <Notes key={note.id} note={note} />)
    }

    return (
        <>
            <h2 className='mt-3'>Notes</h2>
            {renderNotes()}
        </>
    );
}

export default NotesList;
