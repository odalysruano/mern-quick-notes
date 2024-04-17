export default function NoteCard({ note }) {
    const dateObject = new Date(note.createdAt);

    return(
        <div>
            <h1>{ note.text }</h1>
            <p>{ dateObject.toLocaleString() }</p>
        </div>
    );
}
