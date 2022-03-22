function opposite(number) {
  let result = '';
  const str = String(number);
  if (str[0] === '-') {
    result = str.slice(1);
  } else if (str[0] !== '-') {
    result = `-${str}`;
  }
  return Number(result);
}
module.exports = { opposite };
