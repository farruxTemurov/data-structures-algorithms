// 34. Find First and Last Position of Element in Sorted Array

var searchRange = function (nums, target) {
    let positionOfTarget = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            positionOfTarget.push(i);
        }
    }
    if (positionOfTarget.length === 0) { // if target isn't found
        return [-1, -1];
    }

    return [positionOfTarget[0], positionOfTarget[positionOfTarget.length - 1]]; // returns the start and the end index
    // if there are more than two indexes, it gets the first and last.
}

const nums = [5, 7, 7, 8, 8, 10];
console.log(searchRange(nums, 7));