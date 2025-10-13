// Filter Elements from Array

const filter = function (arr, fn) {
    const filteredArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

const arr = [5, 12, 8, 20];

function fn(value, index) {
  return value > 10;
}

console.log(filter(arr, fn));