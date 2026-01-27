const strToInt = (str) => {
  let result = 0;
  const ZERO_IN_ASCII = 48;

  const isNegative = str[0] === "-";
  const startIndex = isNegative ? 1 : 0;

  for (let i = startIndex; i < str.length; i++) {
    const digit = str.charCodeAt(i) - ZERO_IN_ASCII;
    if (digit < 0 || digit > 9) {
      return NaN;
    }
    result = result * 10 + digit;
  }

  return isNegative ? -result : result;
};

console.log(strToInt("237"));
console.log(strToInt("23438917"));
console.log(strToInt("23438917s"));
console.log(strToInt("-23438917"));
