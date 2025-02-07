import { useState } from "react";
// , useEffect
import { Form, Button } from "react-bootstrap";
// , ListGroup

const TransitionPlanning: React.FC = () => {
  // Load Risk Factors data (uneditable)
  // const loadRiskFactors = () => {
  //   const savedRiskFactors = JSON.parse(localStorage.getItem("riskFactors") || "[]");
  //   return savedRiskFactors;
  // };

  // const [riskFactors, setRiskFactors] = useState<string[]>(loadRiskFactors());

  // Form fields for the user to fill out
  const [goal, setGoal] = useState("");
  const [expectedDate, setExpectedDate] = useState("");
  const [pastProblems, setPastProblems] = useState("");
  const [highRisk, setHighRisk] = useState("");
  const [warningSigns, setWarningSigns] = useState("");
  const [skills, setSkills] = useState("");

  // Save transition planning data to localStorage
  const saveTransitionPlanningData = () => {
    const transitionData = {
      goal,
      expectedDate,
      pastProblems,
      highRisk,
      warningSigns,
      skills,
    };

    localStorage.setItem("transitionPlanning", JSON.stringify(transitionData));
    alert("Transition planning data saved!");
  };

  // useEffect(() => {
  //   // Loading initial Risk Factors data when the component mounts
  //   setRiskFactors(loadRiskFactors());
  // }, []);

  return (
    <div className="mt-3">
      {/* Display Risk Factors from localStorage */}
      {/* <h5>Risk Factors</h5>
      <ListGroup className="mb-3">
        {riskFactors.map((factor, index) => (
          <ListGroup.Item key={index}>{factor}</ListGroup.Item>
        ))}
      </ListGroup> */}

      <hr />

      {/* Transition Planning Form Fields */}
      <h5>Transition Planning</h5>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Goal</Form.Label>
          <Form.Control
            type="text"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="Enter Goal"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Expected Date for Completion</Form.Label>
          <Form.Control
            type="date"
            value={expectedDate}
            onChange={(e) => setExpectedDate(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Accounting for Past Problems</Form.Label>
          <Form.Control
            type="text"
            value={pastProblems}
            onChange={(e) => setPastProblems(e.target.value)}
            placeholder="Enter how past problems are being addressed"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>High Risk Situation</Form.Label>
          <Form.Control
            type="text"
            value={highRisk}
            onChange={(e) => setHighRisk(e.target.value)}
            placeholder="Enter a high-risk situation"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Warning Signs or Triggers</Form.Label>
          <Form.Control
            type="text"
            value={warningSigns}
            onChange={(e) => setWarningSigns(e.target.value)}
            placeholder="Enter warning signs or triggers"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Skills</Form.Label>
          <Form.Control
            type="text"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="Enter skills"
          />
        </Form.Group>

        <Button variant="primary" onClick={saveTransitionPlanningData}>
          Save Transition Planning
        </Button>
      </Form>
    </div>
  );
};

export default TransitionPlanning;
