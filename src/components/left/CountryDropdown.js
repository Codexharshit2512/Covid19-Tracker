import React, { useContext } from "react";
import { FormControl, Select, MenuItem } from "@material-ui/core";

import { caseContext } from "../../context/caseContext";

const CountryDropdown = (props) => {
  let { countries } = useContext(caseContext);

  return (
    <div className="select">
      {countries.length === 0 ? null : (
        <FormControl>
          <Select
            labelId="countries-select"
            id="country-select"
            variant="outlined"
            value={props.country}
            onChange={(e) => props.changeCountry(e.target.value)}
          >
            {countries.map((country) => (
              <MenuItem key={country.country} value={country.country}>
                {country.country}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </div>
  );
};

export default CountryDropdown;
