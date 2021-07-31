const twoDigits = (n) => `${n < 10 ? '0' : ''}${n}`;

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = twoDigits(date.getMonth() + 1);
  const day = twoDigits(date.getDate());

  return `${year}-${month}-${day}`;
}

export { twoDigits, formatDate };
