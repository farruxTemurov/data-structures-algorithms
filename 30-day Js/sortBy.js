// 2724. Sort By

/*const sortBy = function (arr, fn) {
    return arr.toSorted((a, b) => fn(a) - fn(b)); // toSorted returns a copy of the original arr
};*/

const sortBy = function (arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b)); // sort mutates the original arr
};

/*const fn = x => x;
const arr = [5, 4, 1, 2, 3];*/

const arr = [{ x: 3 }, { x: 1 }, { x: 2 }];
const fn = obj => obj.x;
console.log(sortBy(arr, fn));


