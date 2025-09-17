// Binary Search -> ikkilik qidiruv tizimi
// Bu ishlashi uchun ro'yxat tartibda bo'lishi shart!

const binary_search = function (myList, item) {
    let left = 0, right = myList.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let guess = myList[mid];  // get the value at mid index

        if (guess === item) return mid;
        if (guess > item) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return null;
}

const myList = [1, 3, 4, 6, 7, 8, 10, 12, 23];
console.log(binary_search(myList, 4)); // output: 2
