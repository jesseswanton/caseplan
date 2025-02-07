import { useState } from "react";
import { Form, Button } from "react-bootstrap";

type ResponseType = "dropdown" | "checkbox" | "text";

interface Question {
  id: string;
  questionText: string;
  responseType: ResponseType;
  options?: string[];
  answer: string | string[];
  riskLevel?: "Low" | "Moderate" | "High"; // Changed to a single riskLevel for each question
}

interface TestProps {
  testData: Question[];
  setTestData: React.Dispatch<React.SetStateAction<Question[]>>;
}

const Test: React.FC<TestProps> = ({ testData, setTestData }) => {
  const [newQuestion, setNewQuestion] = useState<string>("");
  const [responseType, setResponseType] = useState<ResponseType>("text");
  const [options, setOptions] = useState<string>("");

  // Add a new question
  const handleAddQuestion = () => {
    if (!newQuestion.trim()) return;

    const newEntry: Question = {
      id: Date.now().toString(),
      questionText: newQuestion,
      responseType,
      options: responseType !== "text" ? options.split(",").map((o) => o.trim()) : undefined,
      answer: responseType === "checkbox" ? [] : "",
      riskLevel: "Low", // Initialize with "Low" as the default risk level
    };

    setTestData((prev) => [...prev, newEntry]);
    setNewQuestion("");
    setOptions("");
  };

  // Handle answer changes
  const handleAnswerChange = (id: string, answer: string | string[]) => {
    setTestData((prev) =>
      prev.map((q) => (q.id === id ? { ...q, answer } : q))
    );
  };

  // Handle risk level change for a specific question
  const handleRiskLevelChange = (questionId: string, riskLevel: "Low" | "Moderate" | "High") => {
    setTestData((prev) =>
      prev.map((q) =>
        q.id === questionId ? { ...q, riskLevel } : q
      )
    );
  };

  return (
    <div className="test-container">
      {/* Input for new questions */}
      <div className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter your question"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        />
        <Form.Select
          className="mt-2"
          value={responseType}
          onChange={(e) => setResponseType(e.target.value as ResponseType)}
        >
          <option value="text">Text</option>
          <option value="dropdown">Dropdown</option>
          <option value="checkbox">Checkbox</option>
        </Form.Select>
        {responseType !== "text" && (
          <Form.Control
            className="mt-2"
            type="text"
            placeholder="Enter options (comma-separated)"
            value={options}
            onChange={(e) => setOptions(e.target.value)}
          />
        )}
        <Button className="mt-2" onClick={handleAddQuestion}>Add Question</Button>
      </div>

      {/* Scrollable questions list */}
      <div className="questions-list">
        {testData.map((q, index) => (
          <div key={q.id} className="question-item">
            <strong>{index + 1}. {q.questionText}</strong>
            {q.responseType === "text" ? (
              <div className="mt-1">
                <Form.Control
                  className="mt-1"
                  type="text"
                  value={q.answer as string}
                  onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                />

                {/* Risk Level Dropdown for text questions */}
                <Form.Select
                  className="mt-2"
                  value={q.riskLevel || "Low"}
                  onChange={(e) => handleRiskLevelChange(q.id, e.target.value as "Low" | "Moderate" | "High")}
                >
                  <option value="Low">Low</option>
                  <option value="Moderate">Moderate</option>
                  <option value="High">High</option>
                </Form.Select>
              </div>
            ) : q.responseType === "dropdown" ? (
              <div className="mt-1">
                <Form.Select
                  value={q.answer as string}
                  onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                >
                  <option value="">Select an option</option>
                  {q.options?.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </Form.Select>

                {/* Risk Level Dropdown for dropdown questions */}
                <Form.Select
                  className="mt-2"
                  value={q.riskLevel || "Low"}
                  onChange={(e) => handleRiskLevelChange(q.id, e.target.value as "Low" | "Moderate" | "High")}
                >
                  <option value="Low">Low</option>
                  <option value="Moderate">Moderate</option>
                  <option value="High">High</option>
                </Form.Select>
              </div>
            ) : (
              <div className="mt-1">
                {q.options?.map((opt, i) => (
                  <div key={i}>
                    <Form.Check
                      type="checkbox"
                      label={opt}
                      checked={(q.answer as string[]).includes(opt)}
                      onChange={(e) => {
                        const checked = e.target.checked;
                        const newAnswers = checked
                          ? [...(q.answer as string[]), opt]
                          : (q.answer as string[]).filter((ans) => ans !== opt);
                        handleAnswerChange(q.id, newAnswers);
                      }}
                    />
                  </div>
                ))}

                {/* Risk Level Dropdown for checkbox questions */}
                <Form.Select
                  className="mt-2"
                  value={q.riskLevel || "Low"}
                  onChange={(e) => handleRiskLevelChange(q.id, e.target.value as "Low" | "Moderate" | "High")}
                >
                  <option value="Low">Low</option>
                  <option value="Moderate">Moderate</option>
                  <option value="High">High</option>
                </Form.Select>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;
