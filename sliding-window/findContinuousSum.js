function findContinuousSum(n, target) {
  const result = [];
  let start = 1;
  let end = 1;
  let currentSum = 0;

  while (start <= target) {
    if (currentSum < target) {
      currentSum += end;
      end++;
    } else if (currentSum > target) {
      currentSum -= start;
      start++;
    } else {
      let sequence = [];

      for (let i = start; i < end; i++) {
        sequence.push(i);
      }
      result.push(sequence);
      currentSum -= start;
      start++;
    }
  }

  return result;
}

console.log(findContinuousSum(15, 7));
console.log(findContinuousSum(12, 6));
console.log(findContinuousSum(5, 10));
