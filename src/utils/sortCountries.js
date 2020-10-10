export const sortCountries = (countries) => {
  let temp = [];
  countries.forEach((country) => {
    const obj = { ...country };
    temp.push(obj);
  });
  temp.sort((a, b) => {
    return b.cases - a.cases;
  });
  return temp;
};
