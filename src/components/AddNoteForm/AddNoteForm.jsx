import { useState } from 'react';
import * as NoteAPI from '../../utilities/notes-api';

export default function AddNoteForm({setNotes}) {
    const [note, setNote] = useState('');

    function handleChange(evt) {
        setNote(evt.target.value);
    }

    async function handleSubmit(evt) {
        // Prevent form from being submitted to the server
        evt.preventDefault();
        await NoteAPI.create(note);
        const updatedNotes = await NoteAPI.index();
        setNotes(updatedNotes);
        setNote('');
    }

    return(
        <div>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <textarea value={note} onChange={handleChange} required ></textarea>
                <button type="submit">Add Note</button>
            </form>
        </div>
    );
}
