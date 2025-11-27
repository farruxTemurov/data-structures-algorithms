// 2677. Chunk Array
// js slice() method takes in 2 args: start(inclusive) and end(exclusive)

const chunk = function (arr, size) {
    const result = [];

    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }

    return result;
}

const cars = ['Hyundai', 'Mers', 'Lambo', 'BMW'];
console.log(chunk(cars, 1));            
console.log(chunk(cars, 3));            
