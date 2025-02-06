"use client";

import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const ProtectiveFactors = () => {
  const [sections, setSections] = useState({
    Family: ["Strong Family Support", "Positive Role Models"],
    Recreation: ["Engaged in Sports", "Hobbies and Interests"],
    Associates: ["Supportive Friends", "Mentors"],
    Attitudes: ["Positive Outlook", "Goal-Oriented"],
    SchoolWork: ["Good Academic Performance", "Extracurricular Activities"],
  });

  const handleAddCheckbox = (section: string) => {
    const newLabel = prompt(`Enter new protective factor for ${section}:`);
    if (newLabel) {
      setSections((prev) => ({
        ...prev,
        [section]: [...prev[section as keyof typeof sections], newLabel],
      }));
    }
  };

  return (
    <Container className="protective-factors-container">
      <h3>Protective Factors</h3>

      <div className="protective-sections">
        {Object.entries(sections).map(([section, checkboxes]) => (
          <div key={section} className="protective-section">
            <h5>{section}</h5>
            {checkboxes.map((label, index) => (
              <Form.Check key={index} type="checkbox" label={label} />
            ))}
            <Button
              variant="outline-primary"
              size="sm"
              onClick={() => handleAddCheckbox(section)}
            >
              + Add
            </Button>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ProtectiveFactors;
