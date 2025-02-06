"use client";

import { useState } from "react";
import { Tab, Tabs, Container } from "react-bootstrap";
import RiskFactors from "@/components/RiskFactors";
import ProtectiveFactors from "@/components/ProtectiveFactors";

const CasePlanTabs = () => {
  const [key, setKey] = useState("riskFactors");

  return (
    <Container className="caseplan-container">
      <Tabs
        id="case-plan-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k || "riskFactors")}
        className="caseplan-tabs"
      >
        <Tab eventKey="riskFactors" title="Risk Factors">
        <RiskFactors />
        </Tab>
        <Tab eventKey="protectiveFactors" title="Protective Factors">
            <ProtectiveFactors />
        </Tab>
        <Tab eventKey="miniCPT" title="Mini CPT">
          <div className="tab-content">Mini CPT content goes here.</div>
        </Tab>
        <Tab eventKey="worksheet" title="Worksheet">
          <div className="tab-content">Worksheet content goes here.</div>
        </Tab>
        <Tab eventKey="transitionPlanning" title="Transition Planning">
          <div className="tab-content">Transition Planning content goes here.</div>
        </Tab>
        <Tab eventKey="incentives" title="Incentives">
          <div className="tab-content">Incentives content goes here.</div>
        </Tab>
        <Tab eventKey="sanctions" title="Sanctions">
          <div className="tab-content">Sanctions content goes here.</div>
        </Tab>
        <Tab eventKey="notes" title="Notes">
          <div className="tab-content">Notes content goes here.</div>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default CasePlanTabs;
