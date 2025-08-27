var removeDuplicates = function (nums) {
    let i = 1;

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== nums[i - 1]) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
};

nums = [1, 1, 2];
console.log(removeDuplicates(nums));
