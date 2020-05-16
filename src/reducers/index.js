import { currentYear, currentMonth } from "../constants";

const initialState = {
  year: currentYear,
  month: currentMonth
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'YEAR_CHOSEN':
      return {
        ...state,
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