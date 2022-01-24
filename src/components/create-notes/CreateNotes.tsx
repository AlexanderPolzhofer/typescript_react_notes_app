import * as React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import { useRef } from 'react';
import { useState } from 'react';

import { Note } from './../../models/note.model';

interface ICreateNotesProps {
    notes: Note[]
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNotes: React.FC<ICreateNotesProps> = ({ notes, setNotes }) => {

    const [error, setError] = useState<String>('');

    const titleRef = useRef<HTMLInputElement | null>(null);
    const textRef = useRef<HTMLTextAreaElement | null>(null);
    const colorRef = useRef<HTMLInputElement | null>(null);

    const setValuesToEmptyString = (): void => {
        (titleRef.current as HTMLInputElement).value = '';
        (textRef.current as HTMLTextAreaElement).value = '';
        (colorRef.current as HTMLInputElement).value = '';
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (titleRef.current?.value === '' || textRef.current?.value === '') {
            return setError('All fields are mandatory!')
        }
        setError('');
        setNotes([...notes, {
            id: (new Date()).toString(),
            title: (titleRef.current as HTMLInputElement).value,
            text: (textRef.current as HTMLTextAreaElement).value,
            color: (colorRef.current as HTMLInputElement).value,
            date: (new Date()).toString()
        }])

        setValuesToEmptyString();
    }

    return (
        <>
            <h2>Create Notes</h2>
            {error && <Alert variant='danger'>{error}</Alert>}
            <Form className='mt-3 mb-3' onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title for the note" ref={titleRef} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Text</Form.Label>
                    <Form.Control as='textarea' rows={3} placeholder="Enter your notes" ref={textRef} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor='colorInput'>Notes Color</Form.Label>
                    <Form.Control defaultValue='#dfdfdf' type="color" id='colorInput' title="Choose your card color" ref={colorRef} />
                </Form.Group>
                <Button type='submit' variant='primary'>SUBMIT</Button>
            </Form>
        </>
    );
}

export default CreateNotes;