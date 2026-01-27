function squareAndSort(nums) {
  const result = [];
  let left = 0;
  let right = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    const leftSquare = Math.pow(nums[left], 2);
    const rightSquare = Math.pow(nums[right], 2);
    if (leftSquare <= rightSquare) {
      result[i] = rightSquare;
      right--;
    } else {
      result[i] = leftSquare;
      left++;
    }
  }
  return result;
}

console.log(squareAndSort([-2, -1, 0, 1, 2]));
console.log(squareAndSort([1, 2, 3, 4, 5]));
console.log(squareAndSort([-2, -1, 0, 2, 3]));
