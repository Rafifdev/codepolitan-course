import { useState } from "react";

function App() {

  const [notes, setNotes] = useState([]);
  const [inputNotes, setInputNotes] = useState("");

  // Handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // Handle input
  const handleInputChange = (event) => {
    setInputNotes(event.target.value);
  };

  // Handle add button
  const handleAdd = () => {
    if (inputNotes.trim() !== "") {
      const newNote = {
        id: new Date().getTime(),
        text: inputNotes,
      };
      setNotes([...notes, newNote]);
      setInputNotes("");
    }
  };

  // Handle delete button
  const handleDelete = (id) => {
    const updateNotes = notes.filter((note) => note.id !== id);
    setNotes(updateNotes);
  };

  return (
    <div className="app">
      <h1>Notes</h1>
      {/* start input */}
      <form className="note-input" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a note"
          value={inputNotes}
          onChange={handleInputChange}
        />
        <button onClick={handleAdd}>Add</button>
      </form>
      {/* end input */}

      {/* start list */}
      <div className="note">
        <ul className="note-list">
          {notes.map((note) => (
            <li key={note.id}>
              {note.text} <button onClick={() => handleDelete(note.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      {/* end list */}
    </div>
  );
}

export default App;
