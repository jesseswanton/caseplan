import { useState, useEffect } from "react";
import { Tabs, Tab, Button } from "react-bootstrap";
import Assessment from "./Assessment";
import Test from "./Test";
import Scoring from "./Scoring";

// Define the interface for questions
interface Question {
  id: string;
  questionText: string;
  responseType: "dropdown" | "checkbox" | "text";
  options?: string[];
  answer: string | string[];
}

const MiniCPT = () => {
  const [activeTab, setActiveTab] = useState("assessment");
  const [testData, setTestData] = useState<Question[]>([]);

  // Load saved data *only in the browser*
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedData = JSON.parse(localStorage.getItem("testData") || "[]");
      setTestData(savedData);
    }
  }, []);

  // Save data when testData changes
  const handleSave = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("testData", JSON.stringify(testData));
    }
    console.log("Assessment Saved:", testData);
    alert("Assessment saved successfully!");
  };

  return (
    <div className="mt-3">
      {/* Save Button */}
      <div className="d-flex justify-content-end mb-3">
        <Button variant="success" onClick={handleSave}>Save</Button>
      </div>

      <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k || "assessment")} className="mb-3">
        <Tab eventKey="assessment" title="Assessment">
          <Assessment />
        </Tab>
        <Tab eventKey="test" title="Test">
          <Test setTestData={setTestData} testData={testData} />
        </Tab>
        <Tab eventKey="scoring" title="Scoring">
          <Scoring />
        </Tab>
      </Tabs>
    </div>
  );
};

export default MiniCPT;
