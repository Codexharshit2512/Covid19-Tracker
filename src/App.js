import React, { useState, useEffect } from "react";
import { caseContext } from "./context/caseContext";
import LeftContainer from "./components/left/LeftContainer";
import RightContainer from "./components/right/RightContainer";
import { requests } from "./config/configration";
import Loader from "./components/loader/Loader";
import axios from "axios";

function App() {
  let [countries, setCountries] = useState([]);
  let [selectedCountry, setCountry] = useState("Afghanistan");
  let [countryData, setData] = useState({});
  let [caseType, setType] = useState("cases");
  let [countryLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://${requests.countries}`)
      .then((res) => {
        setLoading(false);
        setCountries(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://${requests.country}${selectedCountry}`)
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [selectedCountry]);

  return (
    <caseContext.Provider value={{ caseType, setType, countries }}>
      <div className="App">
        <LeftContainer
          country={selectedCountry}
          changeCountry={(country) => setCountry(country)}
          data={countryData}
        />
        <RightContainer />
        {countryLoading ? <Loader /> : null}
      </div>
    </caseContext.Provider>
  );
}

export default App;
