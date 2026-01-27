function findSubArrays(nums) {
  const result = [];
  const sorted = [...nums].sort((a, b) => a - b);
  console.log(sorted);

  for (let i = 0; i < sorted.length - 2; i++) {
    if (i > 0 && sorted[i] === sorted[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = sorted.length - 1;
    while (left < right) {
      if (sorted[i] + sorted[left] + sorted[right] === 0) {
        result.push([sorted[i], sorted[left], sorted[right]]);

        while (sorted[left] === sorted[left + 1]) {
          left++;
        }
        while (sorted[right] === sorted[right - 1]) {
          right--;
        }
        left++;
        right--;
      } else if (sorted[i] + sorted[left] + sorted[right] > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return result;
}

console.log(findSubArrays([-1, 0, 1, 2, -1, -4]));
console.log(findSubArrays([1, 2, 3, 4, 5]));
console.log(findSubArrays([1, -1, 2, -2, 3, -3, 4, -4]));

console.log(findSubArrays([-1, -1, 0, 1, 1]));
