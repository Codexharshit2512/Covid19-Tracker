import React from "react";
import CaseCard from "./CaseCard.js";

const CaseCardContainer = ({ data }) => {
  return (
    <div className="case-card-container">
      <CaseCard
        caseData={data.todayCases}
        total={data.cases}
        heading={`cases`}
      />
      <CaseCard
        caseData={data.todayRecovered}
        total={data.recovered}
        heading={`recovered`}
      />
      <CaseCard
        caseData={data.todayDeaths}
        total={data.deaths}
        heading={`deaths`}
      />
    </div>
  );
};

export default CaseCardContainer;
