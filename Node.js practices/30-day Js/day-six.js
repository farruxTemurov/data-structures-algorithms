// 2626. Array Reduce Transformation

const reduce = function (nums, fn, init) {
    let val = init;

    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }

    return val;
}
function sum(accum, curr) {
    return accum + curr;
}

const nums = [1, 2, 3, 4];
const init = 0;

const result = reduce(nums, sum, init);
console.log(result);