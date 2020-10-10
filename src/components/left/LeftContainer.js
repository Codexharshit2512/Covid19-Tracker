import React from "react";
import CountryDropdown from "./CountryDropdown";
import CaseCardContainer from "./CaseCardContainer";
import Map from "./Map";

const LeftContainer = (props) => {
  return (
    <div className="left-container">
      <div className="dropdown-container">
        <h1 className="main-heading">COVID-19 Tracker</h1>
        <CountryDropdown
          country={props.country}
          changeCountry={props.changeCountry}
        />
      </div>
      <div className="cases-container">
        <CaseCardContainer data={props.data} />
      </div>

      <Map data={props.data} />
    </div>
  );
};

export default LeftContainer;
