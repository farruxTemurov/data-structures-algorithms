/* You are given an array of integers nums and an integer target.
Find any one pair of numbers whose sum is less than the target.
Return their indices as an array [i, j].
If no such pair exists, return []. */
const findTargetPair = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] < target) {
                return [i, j];
            }
        }
    }
    return [];
}

