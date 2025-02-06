import { useState } from "react";

const Assessment = () => {
  const [testAdmin, setTestAdmin] = useState("");
  const [testDate, setTestDate] = useState("");

  return (
    <div>
      <div className="mb-3">
        <label className="form-label">Test Administrator:</label>
        <input
          type="text"
          className="form-control"
          value={testAdmin}
          onChange={(e) => setTestAdmin(e.target.value)}
          placeholder="Enter name"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Test Date:</label>
        <input
          type="date"
          className="form-control"
          value={testDate}
          onChange={(e) => setTestDate(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Assessment;
