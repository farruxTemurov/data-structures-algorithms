// Quick sort
// implements Divide and Conquer method

function quickSort(arr) {
    if (arr.length <= 1) return arr; // base case

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [10, 7, 8, 9, 1, 5];
console.log("Before sorting: ", arr);
console.log("After sorting: ", quickSort(arr));