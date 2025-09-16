// 1. ikki qiymatni qo'shish algoritimi

const twoSum = function (a, b) {
    let result = a + b;
    return result;
}

a = 2;
b = 4;
console.log(twoSum(a, b));

// 2. Uch sondan eng kattasini topish

const findTheLargest = function (a, b, c) {
    if (a >= b && a >= c) {
        console.log(a + " is largest");
    } else if (b >= a && b >= c) {
        console.log(b + " is largest");
    } else {
        console.log(c + " is largest");
    }
}
a = 3;
b = 1;
c = 9;

findTheLargest(a, b, c);

