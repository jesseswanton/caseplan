import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const RiskFactors = () => {
  const [riskLevel, setRiskLevel] = useState("Low");
  const [sections, setSections] = useState({
    Personality: ["Impulsive", "Aggressive"],
    Family: ["Parental Conflict", "Lack of Supervision"],
    Associates: ["Peer Pressure", "Gang Involvement"],
    Attitudes: ["Anti-Social Beliefs", "Lack of Empathy"],
    SchoolWork: ["Low Grades", "Frequent Absences"],
    SubstanceAbuse: ["Alcohol Use", "Drug Use"],
  });

  const handleAddCheckbox = (section: string) => {
    const newLabel = prompt(`Enter new risk factor for ${section}:`);
    if (newLabel) {
      setSections((prev) => ({
        ...prev,
        [section]: [...prev[section as keyof typeof sections], newLabel],
      }));
    }
  };

  return (
    <Container className="risk-factors-container">
      <h3>Risk Level</h3>
      <Form.Select
        value={riskLevel}
        onChange={(e) => setRiskLevel(e.target.value)}
      >
        <option value="Low">Low</option>
        <option value="Moderate">Moderate</option>
        <option value="High">High</option>
      </Form.Select>

      <div className="risk-sections">
        {Object.entries(sections).map(([section, checkboxes]) => (
          <div key={section} className="risk-section">
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

export default RiskFactors;
