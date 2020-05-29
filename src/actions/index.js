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

const weatherLoaded = (data) => {
  return {
    type: 'WEATHER_LOADED',
    payload: data
  };
}

const solChosen = (sol) => {
  return {
    type: 'SOL_CHOSEN',
    payload: sol
  }
}

export {
  yearChosen,
  monthChosen,
  weatherLoaded,
  solChosen
};