/* Two pointers -> is a method where we use two indices(usually one in the beginning
and one in the end) to improve the speed of traversing the array */

// 167. Two Sum II - Input Array Is Sorted

const twoSum = function (numbers, target) { // numbers is 1-indexed array of integers  
    let left = 0, right = numbers.length - 1;

    while (left < right) {
        const curSum = numbers[left] + numbers[right];

        if (curSum === target) {
            return [left + 1, right + 1];
        } else if (curSum > target) {
            right--;
        } else {
            left++;
        }
    }
    return []; // just in case if solution didn't exist
}

const numbers = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(numbers, target)); /* output: [1, 2] 
-> the index of nums that add up to 9 (considering the array is 1-indexed)*/