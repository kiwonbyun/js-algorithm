function isSumOfSquares(num) {
  let left = 1;
  let right = Math.floor(Math.sqrt(num));

  while (left < right) {
    const sum = Math.pow(left, 2) + Math.pow(right, 2);
    if (sum === num) {
      return true;
    } else if (sum > num) {
      right--;
    } else {
      left++;
    }
  }

  return false;
}

console.log(isSumOfSquares(5));
console.log(isSumOfSquares(10));
console.log(isSumOfSquares(3));
