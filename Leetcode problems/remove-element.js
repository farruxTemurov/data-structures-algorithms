var removeElement = function (nums, val) {
    let left = 0;
    let right = nums.length;

    while (left < right) {
        if (nums[left] === val) {
            nums[left] = nums[right - 1];
            right--;
        } else {
            left++;
        }
    }
    return right;
}

nums = [0, 1, 2, 2, 3, 0, 4, 2];
val = 2;
console.log(removeElement(nums, val));

nums = [3, 2, 2, 3];
val = 3;
console.log(removeElement(nums, val));
