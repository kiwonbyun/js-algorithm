function maxArea(nums) {
  let max = 0;
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const h = nums[left] > nums[right] ? nums[right] : nums[left];
    const con = h * (right - left);
    if (max < con) {
      max = con;
    }
    if (nums[left] < nums[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
}

console.log(maxArea([3, 7, 5, 2, 1, 8, 9]));
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([4, 3, 2, 1, 4]));
