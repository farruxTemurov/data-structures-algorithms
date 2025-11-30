function binarySearch(array, searchElement) {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        if (array[mid] === searchElement) {
            return mid;
        }
        else if (array[mid] < searchElement) {
            left = mid + 1;

        } else {
            right = mid - 1;

        }
    }
    return -1;
}
let array = [10, 1, 5, 3, 4, 7, 6, 8, 9, 2];
console.log("array element " + array)
array.sort((a, b) => a - b);
console.log("Sort element " + array)
let searchElement = 10;
let indexElement = binarySearch(array, searchElement);
if (indexElement !== -1) {
    console.log(`Element ${searchElement} found at index ${indexElement}`);
} else {
    console.log(`Element ${searchElement} not found in array`);
}

// Search Insert Position 

const searchInsertPosition = function (nums, target) {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left; // will return the position of the element to be or already inserted
}

const nums = [1, 3, 5, 6];
const target = 4
console.log(searchInsertPosition(nums, target));