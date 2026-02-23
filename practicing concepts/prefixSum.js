const prefixSum = function (nums) {
    const n = nums.length;
    const prefix = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }
    return prefix;
}

const nums = [2, -2, 3, 0];
console.log(prefixSum(nums));

const countSubarraySum = function (nums, k) {
    const n = nums.length;
    const prefix = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    let count = 0;
    for (let i = 0; i < prefix.length; i++) {
        for (let j = i + 1; j < prefix.length; j++) {
            // If the difference between two prefix sums equals K, 
            // the subarray between them sums to K!
            if (prefix[j] - prefix[i] === k) {
                count++;
            }
        }
    }
    return count;
}

const nums2 = [1, 1, 1], k = 2;
console.log(countSubarraySum(nums2, k));