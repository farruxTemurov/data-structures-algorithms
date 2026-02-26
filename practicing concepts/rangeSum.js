// 303. Range Sum Query - Immutable

/* Calculate the sum of the elements of 
nums between indices left and right inclusive where left <= right. */

const NumArray = function (nums) {
    this.prefix = new Array(nums.length + 1).fill(0);

    for (let i = 0; i < nums.length; i++) {
        this.prefix[i + 1] = this.prefix[i] + nums[i];
    }
};

NumArray.prototype.sumRange = function (left, right) {
    return this.prefix[right + 1] - this.prefix[left];
};

const obj = new NumArray([-2, 0, 3, -5, 2, -1]);

console.log("Test Case 1 (0, 2): ", obj.sumRange(0, 2)); //output:  1
console.log("Test Case 1 (2, 5): ", obj.sumRange(2, 5)); //output:  -1
console.log("Test Case 1 (0, 5): ", obj.sumRange(0, 5)); //output:  -3
