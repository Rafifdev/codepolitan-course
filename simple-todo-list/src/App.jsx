import { useState } from "react";

function App() {
  const [noteChange, setNoteChange] = useState("");
  const [note, setNote] = useState([]);

  const handleInputChage = (event) => {
    setNoteChange(event.target.value);
  };

  const handleAddNote = () => {
    if (noteChange.trim() !== "") {
      const newNote = {
        id: new Date().getTime(),
        text: noteChange,
      };
      setNote([...note, newNote]);
      setNoteChange("");
    }
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = note.filter((note) => note.id !== id);
    setNote(updatedNotes);
  };

  return (
    <div className="app">
      <h1>Notes</h1>

      <form className="note-input" onSubmit={(event) => event.preventDefault()}>
        <input
          type="text"
          placeholder="Add a note..."
          value={noteChange}
          onChange={handleInputChage}
        />
        <button onClick={handleAddNote}>Add</button>
      </form>

      <div className="note">
        <ul className="note-list">
          {note.map((note) => (
            <li key={note.id}>
              {note.text}{" "}
              <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
