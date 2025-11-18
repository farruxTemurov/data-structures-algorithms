//66. Plus One

const plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i++) {
        if (digits[i] + 1 !== 10) {
            digits[i] += 1;
            return digits;
        }

        digits[i] = 0;

        if (i === 0) {
            digits.unshift(1);
            return digits;
        }
    }
}

digits = [1, 2, 3];
console.log(plusOne(digits));

digits = [4, 3, 2, 1];
console.log(plusOne(digits));