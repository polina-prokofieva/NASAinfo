const yearChosen = (year) => {
  return {
    type: 'YEAR_CHOSEN',
    payload: year
  };
};

const monthChosen = (month) => {
  return {
    type: 'MONTH_CHOSEN',
    payload: month
  };
};

export {
  yearChosen,
  monthChosen
};