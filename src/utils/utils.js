import numeral from "numeral";

export const prettyFormat = (value) => {
  return value < 1000
    ? numeral(value).format("+0a")
    : numeral(value).format("+0.0a");
};
