// Apply Transform Over Each Element in Array

const map = function (arr, fn) {
    const transformedArr = [];

    for (let i = 0; i < arr.length; i++) {
        transformedArr[i] = fn(arr[i], i);
    }

    return transformedArr;
};

const nums = [2, 4, 6];
const count = map(nums, (num) => num + 1);
console.log("Transformed count:", count);