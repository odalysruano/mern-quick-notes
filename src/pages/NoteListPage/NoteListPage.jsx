import { useEffect, useState } from "react";
import NoteCard from "../../components/NoteCard/NoteCard";
import AddNoteForm from "../../components/AddNoteForm/AddNoteForm";
import * as NoteAPI from '../../utilities/notes-api';

export default function NoteListPage() {
    const [notes, setNotes] = useState([]); 

    useEffect(function() {
        NoteAPI.index().then(resp => setNotes(resp));
    }, []);

    return(
        <>
            <h1>Quick Notes</h1>
            {notes.length === 0 ? (
                <p>No Notes Yet!</p>
            ) : (
                <></>
            ) }
            <AddNoteForm setNotes={setNotes} />
            {notes.map((note) => (<NoteCard key={note._id} note={note} />))}
        </>
    );
}
