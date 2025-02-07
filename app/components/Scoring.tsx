import { useEffect, useState } from "react";

interface Question {
  id: string;
  questionText: string;
  responseType: "dropdown" | "checkbox" | "text";
  options?: string[];
  answer: string | string[];
  riskLevel?: "Low" | "Moderate" | "High"; // Changed to directly reference riskLevel
}

interface ScoringProps {
  testData: Question[];
}

const Scoring: React.FC<ScoringProps> = ({ testData }) => {
  const [maxRiskLevel, setMaxRiskLevel] = useState<"Low" | "Moderate" | "High">("Low");
  const [answers, setAnswers] = useState<{ question: string; answer: string | string[]; riskLevel: "Low" | "Moderate" | "High" }[]>([]);

  useEffect(() => {
    // Risk level value mapping for comparison
    const riskLevelValues: { [key in "Low" | "Moderate" | "High"]: number } = {
      Low: 1,
      Moderate: 2,
      High: 3,
    };

    let highestRiskLevel: "Low" | "Moderate" | "High" = "Low"; // Start with default Low risk level
    const answerDetails: { question: string; answer: string | string[]; riskLevel: "Low" | "Moderate" | "High" }[] = [];

    testData.forEach((q) => {
      const questionRiskLevel: "Low" | "Moderate" | "High" = q.riskLevel || "Low"; // Default to question's stored risk level

      // Store the question, answer, and determined risk level
      answerDetails.push({
        question: q.questionText,
        answer: q.answer,
        riskLevel: questionRiskLevel,
      });

      // Update the overall maximum risk level
      if (riskLevelValues[questionRiskLevel] > riskLevelValues[highestRiskLevel]) {
        highestRiskLevel = questionRiskLevel;
      }
    });

    // Set the max risk level for the entire test
    setMaxRiskLevel(highestRiskLevel);
    setAnswers(answerDetails);
  }, [testData]); // Depend on testData to trigger re-computation when it changes

  return (
    <div>
      <h3>Risk Level: {maxRiskLevel}</h3>
      <p>Test Results:</p>
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>
            <strong>{answer.question}</strong>
            <br />
            Answer: {Array.isArray(answer.answer) ? answer.answer.join(", ") : answer.answer}
            <br />
            Risk Level: {answer.riskLevel}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Scoring;
