import { useState, useEffect } from "react";
import { Form, Button, ListGroup } from "react-bootstrap";

const SanctionsTab: React.FC = () => {
  const [note, setNote] = useState(""); // Current note input
  const [notes, setNotes] = useState<string[]>([]); // List of added notes

  // Load saved notes from localStorage
  const loadSavedNotes = () => {
    const savedNotes = JSON.parse(localStorage.getItem("sanctionsNotes") || "[]");
    return savedNotes;
  };

  // Save notes to localStorage whenever notes change
  const saveNotesToLocalStorage = (newNotes: string[]) => {
    localStorage.setItem("sanctionsNotes", JSON.stringify(newNotes));
  };

  useEffect(() => {
    setNotes(loadSavedNotes());
  }, []); // Load notes on component mount

  // Handle the addition of a new note
  const addNote = () => {
    if (note.trim()) {
      const updatedNotes = [...notes, note];
      setNotes(updatedNotes);
      saveNotesToLocalStorage(updatedNotes); // Save updated notes
      setNote(""); // Clear the input field
    }
  };

  // Handle the removal of a note
  const removeNote = (index: number) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
    saveNotesToLocalStorage(updatedNotes); // Save updated notes
  };

  return (
    <div className="mt-3">
      {/* Note Input */}
      <div className="mb-3">
        <Form.Control
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Add a sanction note"
        />
      </div>

      {/* Add Button */}
      <Button variant="primary" onClick={addNote}>
        Add Note
      </Button>

      {/* Notes List */}
      <ListGroup className="mt-3">
        {notes.map((note, index) => (
          <ListGroup.Item key={index}>
            {note}{" "}
            <Button
              variant="danger"
              size="sm"
              className="float-end"
              onClick={() => removeNote(index)}
            >
              Remove
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default SanctionsTab;
