/*You are given an array of integers nums.
Remove all zeros from the array in-place.
Return the number of non-zero elements k.
The first k elements of the array should contain the non-zero elements in the original order.
You cannot use extra arrays. */

const removeAllZeros = function (nums) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
}

