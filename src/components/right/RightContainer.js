import React from "react";
import CasesTable from "./CasesTable";
import CaseChart from "./CaseChart";

const RightContainer = () => {
  return (
    <div className="right-container">
      <div className="live-cases">
        <h3>Live Cases by Country</h3>
        <CasesTable />
      </div>
      <div className="case-chart">
        <CaseChart />
      </div>
    </div>
  );
};

export default RightContainer;
