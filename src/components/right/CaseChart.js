import React, { useState, useEffect, useContext, useRef } from "react";
import { caseContext } from "../../context/caseContext";
import { buildChart } from "../../utils/buildChart";
import { requests } from "../../config/configration";
import CanvasJSReact from "./lib/canvasjs.react";
import RightLoader from "./RightLoader";
import "./lib/canvasjs.min.js";
import axios from "axios";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const setOptions = (chartData, caseType) => {
  return {
    animationEnabled: true,
    title: {
      text:
        caseType[0].toUpperCase() +
        caseType.slice(1, caseType.length) +
        " in Last 30 Days",
    },
    data: [
      {
        type: "splineArea",
        color: caseType == "recovered" ? "#80FF00" : "red",
        dataPoints: chartData,
      },
    ],
  };
};

const CaseChart = () => {
  let [rawData, setRawData] = useState(undefined);
  let [chartData, setData] = useState([]);
  let { caseType } = useContext(caseContext);

  let chart = useRef();
  useEffect(() => {
    if (!rawData) {
      axios
        .get(requests.historical)
        .then((res) => {
          setRawData(res.data);
          let data = buildChart(res.data, caseType);
          setData(data);
        })
        .catch((err) => console.log(err));
    } else {
      setData(buildChart(rawData, caseType));
    }
  }, [caseType, rawData]);

  const options = setOptions(chartData, caseType);

  if (!rawData) return <RightLoader />;

  return (
    <div className="chart-container">
      <CanvasJSChart options={options} onRef={(ref) => (chart.current = ref)} />
    </div>
  );
};

export default CaseChart;
