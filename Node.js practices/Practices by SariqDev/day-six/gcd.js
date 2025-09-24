// GCD -> EKUB
// recursive approach
function gcd(a, b) {
    if (b === 0) return a; // -> any number divides zero, so a will be largest divisor
    return gcd(b, a % b); //-> passing in the remainder as the second value
}

console.log(gcd(8, 4));  // 4
console.log(gcd(18, 24)); // 6
console.log(gcd(7, 13));  // 1