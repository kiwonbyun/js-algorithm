function maxSumOfSubArray(arr, k) {
  let maxSum = Number.NEGATIVE_INFINITY;
  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  maxSum = Math.max(maxSum, windowSum);

  for (let i = k; i < arr.length - k; i++) {
    windowSum = windowSum + arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

console.log(maxSumOfSubArray([5, 7, -1, 14, 3, 12, 1, 4], 3));
