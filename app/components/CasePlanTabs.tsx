"use client";

import { useState } from "react";
import { Tab, Tabs, Container } from "react-bootstrap";
import RiskFactors from "./RiskFactors";
import ProtectiveFactors from "./ProtectiveFactors";
import MiniCPT from "./MiniCPT";
import Worksheet from "./Worksheet";
import Incentives from "./Incentives";
import Sanctions from "./Sanctions";
import Notes from "./Notes";
import TransitionPlanning from "./TransitionPlanning";

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
          <MiniCPT />
        </Tab>
        <Tab eventKey="worksheet" title="Worksheet">
          <Worksheet />
        </Tab>
        <Tab eventKey="transitionPlanning" title="Transition Planning">
          <TransitionPlanning />
        </Tab>
        <Tab eventKey="incentives" title="Incentives">
        <Incentives />
        </Tab>
        <Tab eventKey="sanctions" title="Sanctions">
        <Sanctions />
        </Tab>
        <Tab eventKey="notes" title="Notes">
          <Notes />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default CasePlanTabs;
