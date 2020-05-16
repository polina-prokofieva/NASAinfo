export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export const APODfirstyear = 2015;

export const today = new Date();

export const currentYear = today.getFullYear();

export const currentMonth = today.getMonth();

export const APODallYears = (new Array(currentYear - APODfirstyear + 1)).fill(APODfirstyear).map((a, i) => APODfirstyear + i);