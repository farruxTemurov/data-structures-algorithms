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