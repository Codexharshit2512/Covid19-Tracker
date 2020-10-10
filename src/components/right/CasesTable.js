import React, { useState, useContext, useEffect } from "react";
import { caseContext } from "../../context/caseContext";
import { sortCountries } from "../../utils/sortCountries";
import RightLoader from "./RightLoader";

const CasesTable = () => {
  let { countries } = useContext(caseContext);
  let [countryList, setList] = useState([]);

  useEffect(() => {
    if (countries.length > 0) {
      setList(sortCountries(countries));
    }
  }, [countries]);

  if (countries.length === 0) return <RightLoader />;

  return (
    <div className="cases-table">
      <ul className="country-list">
        {countryList.map((country) => (
          <li className="country-list-item" key={country.country}>
            <div className="country">{country.country}</div>
            <div className="cases">{country.cases}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CasesTable;
