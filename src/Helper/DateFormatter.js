const isToday = (date) => {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

const getRelativeTime = (date) => {
  if (isToday(date)) {
    return `${date.getHours()}:${date.getMinutes()}`;
  }
  return `${date
    .toISOString()
    .substring(0, 10)
    .split('-')
    .reverse()
    .join('/')}`;
};

const convertStringToDate = (dateString) => {
  const year = dateString.substring(0, 4);
  const month = dateString.substring(5, 7);
  const day = dateString.substring(8, 10);
  const hour = dateString.substring(11, 13);
  const minute = dateString.substring(14, 16);
  const second = dateString.substring(17, 19);

  return new Date(year, month - 1, day, parseInt(hour, 10), minute, second);
};

const DateFormatter = {
  getRelativeTime,
  convertStringToDate
};

export default DateFormatter;
