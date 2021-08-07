const twoDigits = (n) => `${n < 10 ? '0' : ''}${n}`;

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = twoDigits(date.getMonth() + 1);
  const day = twoDigits(date.getDate());

  return `${year}-${month}-${day}`;
}

const msInADay = 864e5;

const getNextDay = (date) => new Date(+date + msInADay);
const getPrevDay = (date) => new Date(date - msInADay);

const today = new Date();
const yesterday = getNextDay(today);

const convertDateToString = (date) =>
  date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

const isToday = (date) => {
  const _today = new Date();

  return _today.getFullYear() === date.getFullYear() &&
    _today.getMonth() === date.getMonth() &&
    _today.getDate() === date.getDate();
}

export {
  twoDigits, formatDate,
  today, yesterday, msInADay,
  getPrevDay, getNextDay,
  isToday, convertDateToString
};
