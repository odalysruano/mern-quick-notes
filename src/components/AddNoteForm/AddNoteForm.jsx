import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function AddNoteForm({notes, setNotes}) {
    const [note, setNote] = useState('');

    function handleChange(evt) {
        setNote(evt.target.value);
    }

    async function handleSubmit(evt) {
        // Prevent form from being submitted to the server
        evt.preventDefault();
        var newNotes = [...notes];
        newNotes.push(note);
        setNotes(newNotes);
        
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
