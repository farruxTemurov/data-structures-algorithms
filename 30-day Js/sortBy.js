// 2724. Sort By

/*const sortBy = function (arr, fn) {
    return arr.toSorted((a, b) => fn(a) - fn(b)); // toSorted returns a copy of the original arr
};*/

const sortBy = function (arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b)); // sort mutates the original arr
};




