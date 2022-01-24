import * as React from 'react';
import { Note } from '../../models/note.model';

export interface INotesProps {
    note: Note
}

const Notes: React.FC<INotesProps> = (props) => {

    return (
        <div>
            <h2>Note Card</h2>
        </div>
    );

}

export default Notes;
