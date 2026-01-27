function moveNegatives(nums) {
  let left = 0;
  let right = 0;
  while (right < nums.length) {
    if (nums[right] < 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
    right++;
  }
  return nums;
}

console.log(moveNegatives([1, -4, 3, -2, 5]));
console.log(moveNegatives([-2, 4, -3, 5, -1]));
console.log(moveNegatives([-1, -2, -3, -4]));
