import React, { useContext } from "react";
import { caseContext } from "../../context/caseContext";
import numeral from "numeral";
import { prettyFormat } from "../../utils/utils";

const setBorder = (heading, caseType) => {
  if (caseType.caseType === heading) {
    return {
      borderTop:
        heading === "recovered" ? "10px solid #80ff00" : "10px solid red",
    };
  }
};

const setHeading = (heading) => {
  switch (heading) {
    case "cases":
      return "Coronavirus Cases";
    case "recovered":
      return "Recovered";
    case "deaths":
      return "Deaths";
    default:
      return heading;
  }
};

const CaseCard = ({ caseData, total, heading }) => {
  let caseType = useContext(caseContext);

  let todayCases = prettyFormat(caseData);
  let totalCases = total < 1000 ? total : numeral(total).format("0.0a");

  return (
    <div
      className="card-container"
      onClick={() => caseType.setType(heading)}
      style={setBorder(heading, caseType)}
    >
      <h3 className="case-heading">{setHeading(heading)}</h3>
      <p
        className="case-count"
        style={{ color: heading === "recovered" ? "#80ff00" : "red" }}
      >
        {todayCases}
      </p>
      <p className="case-total">{totalCases} total</p>
    </div>
  );
};

export default CaseCard;
