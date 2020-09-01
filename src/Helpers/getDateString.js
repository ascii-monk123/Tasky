const getDateString = (d) => {
  return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
};

const getTString = (d) => {
  let hours = d.getHours();
  let min = d.getMinutes();
  let meridian = 'am';
  if (parseInt(hours, 10) > 12) {
    hours = (parseInt(hours) - 12).toString();
    meridian = 'pm';
  }
  if (parseInt(min, 10) === 0 || parseInt(min, 10) < 10) {
    min = '0' + min;
  }

  return `${hours}:${min} ${meridian}`;
};

export { getDateString, getTString };
