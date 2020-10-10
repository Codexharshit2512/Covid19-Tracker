import React from "react";
import { Circle, Popup } from "react-leaflet";
import { casesObj } from "./caseType";
// import { red } from "@material-ui/core/colors";

export function addCircle(countries, caseType) {
  return countries.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      radius={Math.sqrt(country.cases) * casesObj[`${caseType}`].multiplier}
      color={casesObj[`${caseType}`].hex}
      key={country.country}
    >
      <Popup>
        <div className="flag">
          <img
            src={country.countryInfo.flag}
            alt={`${country.country} flag`}
            style={{ width: "100%" }}
          />
        </div>
        <div className="country-info">
          <h2>{country.country}</h2>
          <p>
            <strong>Cases:{country.cases}</strong>
          </p>
          <p>
            <strong>Recovered:{country.recovered}</strong>
          </p>
          <p>
            <strong>Deaths:{country.deaths}</strong>
          </p>
        </div>
      </Popup>
    </Circle>
  ));
}
