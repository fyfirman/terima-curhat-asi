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

const DateFormatter = {
  getRelativeTime
};

export default DateFormatter;
