import { useState } from "react";
import { Form, Button } from "react-bootstrap";

// Define the Worksheet Section interface
interface WorksheetSection {
  id: string;
  title: string;
  note: string;
}

const Worksheet: React.FC = () => {
  // Initialize the sections with empty notes
  const sections: WorksheetSection[] = [
    { id: "baw", title: "BAW", note: "" },
    { id: "responsivity", title: "Responsivity", note: "" },
    { id: "mentalHealth", title: "Mental Health", note: "" },
    { id: "incentives", title: "Incentives", note: "" },
    { id: "review", title: "Review", note: "" },
    { id: "protectives", title: "Protectives", note: "" },
    { id: "risks", title: "Risks", note: "" }
  ];

  const [worksheetData, setWorksheetData] = useState<WorksheetSection[]>(sections);

  // Handle note change for a particular section
  const handleNoteChange = (id: string, value: string) => {
    setWorksheetData((prevData) =>
      prevData.map((section) =>
        section.id === id ? { ...section, note: value } : section
      )
    );
  };

  // Handle save functionality
  const handleSave = () => {
    console.log("Saved notes:", worksheetData);
    alert("Notes saved successfully!");
    localStorage.setItem("worksheetNotes", JSON.stringify(worksheetData));
  };

  return (
    <div className="mt-3">
      {/* Save Button */}
      <div className="d-flex justify-content-end mb-3">
        <Button variant="success" onClick={handleSave}>
          Save Notes
        </Button>
      </div>

      <div className="worksheet-container">
        {/* Worksheet Sections */}
        {worksheetData.map((section) => (
          <div key={section.id} className="mb-4">
            <h5>{section.title}</h5>
            <Form.Control
              as="textarea"
              rows={4}
              value={section.note}
              onChange={(e) => handleNoteChange(section.id, e.target.value)}
              placeholder={`Add your note for ${section.title}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Worksheet;
