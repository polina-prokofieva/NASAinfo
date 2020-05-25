import {currentYear, currentMonth, getMonthsOptions} from "../constants";

const initialState = {
  year: currentYear,
  month: currentMonth,
  monthsOptions: getMonthsOptions(currentYear)
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'YEAR_CHOSEN':
      return {
        ...state,
        monthsOptions: getMonthsOptions(action.payload),
        year: action.payload
      };
    case 'MONTH_CHOSEN':
      return {
        ...state,
        month: action.payload
      }
    default:
      return state;
  }
}

export default reducer;