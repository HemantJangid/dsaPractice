let nums = [-2, -3, 4, -1, -2, 1, 5, -3];
// let nums = [1, -1, -2, 3, 4, -3, 4];

function findMaxSubarraySum(nums) {
  let sum = 0;
  let maxSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    maxSum = Math.max(sum, maxSum);
    if (sum < 0) sum = 0;
  }

  return maxSum;
}

console.log(findMaxSubarraySum(nums));
