// 2619. Array Prototype Last
/*Every array in JavaScript inherits methods from Array.prototype.
This is part of JavaScript’s prototype-based inheritance.*/

/*Array.prototype.last = function () {
    return this.length ? this[this.length - 1] : -1;
}*/

// using if condition
Array.prototype.last = function () {
    if (this.length === 0) return -1;
    return this[this.length - 1];
}


const arr = [null, {}, 3];
console.log(arr.last()); // output: 3

const nums = [];
console.log(nums.last()); // output: -1