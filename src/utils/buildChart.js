export const buildChart = (data, caseType) => {
  let chartData = [];
  Object.keys(data[`${caseType}`]).forEach((dateStr) => {
    const date = getDate(dateStr);
    let newDataPoint = {
      x: date,
      y: data[`${caseType}`][`${dateStr}`],
    };

    chartData.push(newDataPoint);
  });
  return chartData;
};

function getDate(dateStr) {
  let dateArr = dateStr.split("/");
  return new Date(2020, parseInt(dateArr[0]) - 1, parseInt(dateArr[1]));
}
