// Divide and Conquer
// you divide your tasks into smaller chunks to get it done easily

// functions to find the sum of elements in an array

/*const findSum = function (array) {
    let sum = 0;
    for (num of array) {
        sum += num;
    }
    return sum;
}*/

// const findSum = arr => arr.reduce((acc, num) => acc + num, 0); 

function sumArray(arr, i = 0) {
  if (i === arr.length) {
    return 0; // base case
  }
  return arr[i] + sumArray(arr, i + 1); // recursive case
}

array = [0, 3, 8, 10];
console.log(sumArray(array));