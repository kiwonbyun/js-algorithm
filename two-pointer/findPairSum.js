function findPairSum(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] + nums[right] === target) {
      return [left, right];
    } else if (nums[left] + nums[right] < target) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return -1;
}

console.log(findPairSum([1, 2, 4, 7, 8], 11)); // [2,3]
console.log(findPairSum([2, 3, 4, 10, 14], 17)); // [1,4]
console.log(findPairSum([-5, -4, -3, -2, -1], -6)); // [0,4]
