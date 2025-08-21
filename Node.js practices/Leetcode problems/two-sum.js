var twoSum = function (nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    };
};


nums = [2, 7, 11, 15];
target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1]