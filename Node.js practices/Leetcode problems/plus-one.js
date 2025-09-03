//66. Plus One

const plusOne = function (digits) {
    for (let i = digits.lenght - 1; i >= 0; i++) {
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

