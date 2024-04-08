import { useState } from "react";
import NoteCard from "../../components/NoteCard/NoteCard";

export default function NoteListPage() {
    const [notes, setNotes] = useState([]); 

    return(
        <>
            <h1>Quick Notes</h1>
            {notes.length === 0 ? (
                <p>No Notes Yet!</p>
            ) : (
                <></>
            ) }
            {notes.map((note) => (<NoteCard note={note} />))}
        </>
    );
}
