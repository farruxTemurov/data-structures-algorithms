const maximum69Number = function (num) {
    return parseInt(num.toString().replace('6', '9'));
};

console.log(maximum69Number(9669)); // -> 9969
console.log(maximum69Number(9996)); // -> 9999