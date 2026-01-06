// 2619. Array Prototype Last
/*Every array in JavaScript inherits methods from Array.prototype.
This is part of JavaScript’s prototype-based inheritance.*/

Array.prototype.last = function () {
    return this.length ? this[this.length - 1] : -1;
}

const arr = [null, {}, 3];
console.log(arr.last());